var gulp = require('gulp'),
    path = require('path'),
    fs = require('fs'),
    gutil = require('gulp-util'),
    scss = require('gulp-sass'),
    del = require('del'),
    watch = require('gulp-watch'),
    chalk = require('chalk'),
    mkdirp = require('mkdirp'),
    replace = require('gulp-replace-task'),
    reactNativeStylesheetCss = require('gulp-react-native-stylesheet-css');

var srcDir = 'src',
    srcScss = path.join(srcDir, '/**/*.scss'),
    srcAll = path.join(srcDir, '/**/*');


/** 获取命令行参数 **/
var params = {}, argv = process.argv
params[argv[2]] = (argv.length > 2) && argv.slice(3).reduce(function(res, p) {
    var segs = p.slice(2).split(':')
    if(segs.length < 2) {
        return console.log(chalk.red('[用法错误]') + ` 参数${p}必须用:分隔`)
    }
    res[segs[0]] = segs[1]
    return res
}, {}) || {}
/*****************/

gulp.task('dev', ['dev:scss', 'dev:watch']);

/** 初始化, 比如生成文件夹 **/
gulp.task('dev:init', function() {
    srcScss = path.join(srcDir, params.dev.dir || '.', '/**/*.scss');
    srcAll = path.join(srcDir, params.dev.dir || '.', '/**/*');
});


gulp.task('dev:scss', ['dev:init'], function(cb) {
    gulp.src(srcScss)
        .pipe(scss().on('error', gutil.log))
        .pipe(reactNativeStylesheetCss())
        .pipe(gulp.dest(srcDir))
        .on('end', function() {
            cb();
        });
});

/** 监听文件变化 **/
gulp.task('dev:watch', ['dev:init'], function() {
    function getPaths(absPath) {
        var filePath = absPath.substr(path.join(__dirname, srcDir).length);
        return {
            filePath: filePath,
            srcPath: path.join(srcDir, filePath)
        };
    }
    watch(srcScss)
        .on('change', function(absFilePath) {
            var paths = getPaths(absFilePath);

            gulp.src(paths.srcPath)
                .pipe(scss().on('error', gutil.log))
                .pipe(reactNativeStylesheetCss())
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
        })
        .on('add', function(absFilePath) {
            var paths = getPaths(absFilePath);

            gulp.src(paths.srcPath)
                .pipe(scss().on('error', gutil.log))
                .pipe(reactNativeStylesheetCss())
                .pipe(gulp.dest(path.dirname(paths.srcPath)));
        })
        .on('unlink', function(absFilePath) {
            var paths = getPaths(absFilePath);
            del(paths.srcPath.replace('.scss', '.css'));
        });
});


//创建新页面
gulp.task('create', function() {
    var pageName = params.create.page;
    var componentName = params.create.component;
    if( (!pageName) && (!componentName) ) {
        return console.log(chalk.red('[用法错误]') + ' npm run create -- --page:pageName 或是 npm run create -- --component:componentName ') 
    }
    var templateDirPath;
    var targetDirPath;
    var name;
    if(pageName){
        name = pageName;
        targetDirPath = path.join(srcDir, 'pages', name);
        templateDirPath = '.template/page/**/*'
    }
    createNewDir(name, templateDirPath, targetDirPath);
});

function createNewDir(name, templateDirPath, targetDirPath) {
    !fs.existsSync(targetDirPath) && mkdirp(targetDirPath, function(){
        gulp.src(templateDirPath)
            .pipe(replace({
                patterns: [
                    {
                    match: 'name',
                    replacement: name
                    }
                ]
            }))
            .pipe(gulp.dest(targetDirPath))
    });
}
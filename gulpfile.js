/*gulp的任务是控制执行流程,webpack的任务是处理复杂引用的依赖*/

var gulp = require('gulp');
var del = require('del');
var gulpSequence = require('gulp-sequence');
var webpack = require("webpack");
var webpackConfig = require("./webpack.publish.config.js");

gulp.task('default',['gulpSequence'], function() {
    console.log("项目构建成功");
});
gulp.task('gulpSequence',gulpSequence('clean','webpack'));

gulp.task('clean',function(cb){
    del(['dist/js','dist/css','dist/img','dist/*.html']);
    setTimeout(function(){
        return cb();
    },5000)

})


gulp.task('webpack', function(cb) {
    setTimeout(function(){
        webpack(webpackConfig, function (err, stats) {

            if (err){
                console.log("任务启动失败");
            }else{
                cb();
            }

        });
    },5000)


});
const gulp = require("gulp");
const minify = require("gulp-uglify");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const optimizeImage = require("gulp-imagemin");


gulp.task("minifyImage",function(){
    return gulp.src("image/*jpg")
        .pipe(optimizeImage())
        .pipe(gulp.dest("opitimizeImg"));
})
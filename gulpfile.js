const gulp = require("gulp");
const optimizeImage = require("gulp-imagemin");

gulp.task("minify",function(){
    return gulp.src("./js/*.js")
        .pipe(minifyJs())   
        .pipe(gulp.dest("dist/script"));
})
gulp.task("minifyImage",function(){
    return gulp.src("image/*.jpg")
        .pipe(optimizeImage())
        .pipe(gulp.dest("Hello"));
})
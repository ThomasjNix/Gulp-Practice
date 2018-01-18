const gulp = require('gulp')
      compileSASS = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      imageMin = require('gulp-imagemin');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(compileSASS()
                .on('error', compileSASS.logError)
             )
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minifyJS', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('imageMin', ()=>{
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
});

/*
*   Implements all of the above tasks in the order listed
*   All assets (css,js,images,etc.) can be loaded from the dist folder now, pre-compiled to be minified
*/
gulp.task('default', ['anyTaskName','sass','minifyJS','imageMin']);
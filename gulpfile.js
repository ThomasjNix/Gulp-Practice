const gulp = require('gulp');
const compileSASS = require('gulp-sass');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

/*
*   Load all SASS files from src/sass/*.scss
*   Pipe files into the compileSASS() function exported from gulp-sass
*   Check for errors, log if there are any
*   Pipe results to the dist/css folder
*/
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(compileSASS()
                .on('error', compileSASS.logError)
             )
        .pipe(gulp.dest('dist/css'))
});
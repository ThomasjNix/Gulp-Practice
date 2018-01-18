const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

/*
*   Grabs all JS files from src/js/*.js
*   Concatenates them together then uglifies them
*   Exports them to dist/js
*/
gulp.task('concatJS', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('func.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
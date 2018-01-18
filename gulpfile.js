const gulp = require('gulp');
const uglify = require('gulp-uglify');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

gulp.task('minifyJS', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
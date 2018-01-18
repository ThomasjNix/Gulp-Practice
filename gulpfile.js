const gulp = require('gulp');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

gulp.task('copyHTML', function(){
    /*
    *   Get all .html files from src folder
    *   Pipe function to gulp.dest to set up 'dist' destination folder    
    */
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});
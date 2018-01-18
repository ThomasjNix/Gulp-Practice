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
*   Load a task that will watch all directories for changes, and rerun a task if changes are found.
*/
gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['minifyJS']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
});

/*
*   Append 'watch' as the last task so any changes will rerun the task associated with it.
*/
gulp.task('default', ['anyTaskName','sass','minifyJS','imageMin', 'watch']);


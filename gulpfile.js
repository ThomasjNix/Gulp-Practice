const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

// Task that will log a message
gulp.task('anyTaskName', function(){
    return console.log('Task running!');
});

/*
*   Load in all images with gulp.src
*   pipe the images into the imageMin() function exported from gulp-imagemin
*   pipe results to the destination folder
*/
gulp.task('imageMin', ()=>{
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.reload({
      	stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  	gulp.watch('scss/*.scss', ['sass']);
});


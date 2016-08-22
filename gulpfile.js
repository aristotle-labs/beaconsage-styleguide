var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var scsslint = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('check-sass', function() {
  return gulp.src(['scss/*.scss', 'scss/partials/*.scss']) // Gets all files ending with .scss
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss') // Gets all files ending with .scss
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
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
  	gulp.watch('scss/**/*.scss', ['check-sass', 'sass']);
});


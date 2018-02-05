var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('scss/*.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(gulp.dest(
            f => f.base.replace('\\scss\\', '\\css\\')));
});

gulp.task('typescript', function() {
    gulp.src('ts/*.ts')
      .pipe(ts({
        noImplicitAny: true,
      }))
      .pipe(gulp.dest(
        f => f.base.replace('\\ts\\', '\\js\\')));
  });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'typescript', 'browser-sync'], function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('ts/*.ts', ['typescript']);
    gulp.watch(['*.html', 'scss/*.scss', 'css/*.css', 'ts/*.ts', 'js/*.js']).on('change', browserSync.reload);
});

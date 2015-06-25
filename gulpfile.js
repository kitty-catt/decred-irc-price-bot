var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var markdown = require('gulp-markdown');

gulp.task('default', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  gulp.src('./modules/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  gulp.src('./modules/misc/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

  gulp.src('./*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./build/markdown'));

  gulp.src('./Docs/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./build/markdown'));
});

gulp.task('watch', function() {
    gulp.watch('./*.js', ['default']);
    gulp.watch('./*.md', ['default']);
    gulp.watch('./Docs/*.md', ['default']);
    gulp.watch('./lib/*.js', ['default']);
    gulp.watch('./modules/*.js', ['default']);
    gulp.watch('./modules/misc/*.js', ['default']);
});

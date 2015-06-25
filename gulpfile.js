var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var markdown = require('gulp-markdown');
var jsonFormat = require('gulp-json-format');

gulp.task('default', function() {
  gulp.src('./app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
	
  gulp.src('./main.js')
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
	
  gulp.src(['./app.js'])
    .pipe(concat('app.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/JavaScript'));
	
  gulp.src(['./main.js'])
    .pipe(concat('main.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/JavaScript'));
	
  gulp.src(['./lib/*.js'])
    .pipe(concat('./lib/*.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/JavaScript'));
	
  gulp.src(['./modules/*.js'])
    .pipe(concat('./modules/*.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/JavaScript'));
	
  gulp.src(['./modules/misc/*.js'])
    .pipe(concat('./modules/misc/*.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/JavaScript'));
 
  gulp.src('./Docs/Cloud9')
    .pipe(changed('./build/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
 
  gulp.src('./Docs/OpenShift')
    .pipe(changed('./build/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
	
  gulp.src('*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./build/markdown'));
	
  gulp.src('./Docs/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./build/markdown'));
	
  gulp.src('*.json')
    .pipe(jsonFormat(4))
    .pipe(gulp.dest('./build/json'));
});

'use strict';

var gulp = require('gulp');
var serve = require('./tasks/serve');
var sass = require('./tasks/sass');
var jade = require('./tasks/jade');

gulp.task('serve', ['jade', 'sass'], serve);
gulp.task('sass', sass);
gulp.task('jade', jade);

gulp.task('default', ['serve']);

gulp.watch(['src/styles/**/*.scss'], ['sass']);
gulp.watch(['src/**/*.jade'], ['jade']);

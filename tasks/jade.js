'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var resume = require('../resume.json');

module.exports = function () {
  return gulp.src('src/index.jade')
    .pipe(jade({
      locals: resume
    }))
    .pipe(gulp.dest('dist'));
};

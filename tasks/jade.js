'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var fs = require('fs');

module.exports = function () {
  var resume = JSON.parse(fs.readFileSync('./resume.json'));

  return gulp.src('src/index.jade')
    .pipe(jade({
      locals: resume
    }))
    .pipe(gulp.dest('dist'));
};

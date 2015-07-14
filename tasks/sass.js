'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var processors = [
  autoprefixer({browsers: ['last 2 versions']}),
  mqpacker,
  csswring
];

module.exports = function () {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/styles'));
};

'use strict';

var browserSync = require('browser-sync');

module.exports = function () {
  browserSync.init({
    files: [
      './dist/**/*'
    ],
    server: {
      baseDir: './dist'
    }
  });
};

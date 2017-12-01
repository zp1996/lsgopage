const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const path = require('path');

gulp.task('default', () => {
  const root = path.join(process.cwd(), '..', 'lib');
  return gulp.src(`${root}/mobile/*.js`)
    .pipe(concat('mobile.js'))
    .pipe(uglify())
    .pipe(gulp.dest(root));
});

let gulp = require('gulp')
let sass = require('gulp-sass')

gulp.task('hello', function () {
  console.log('Hello Maria')
})

gulp.task('greeting', function () {
  return gulp.src('source-files')
    .pipe(sass())
    .pipe(gulp.dest('destination'))
})

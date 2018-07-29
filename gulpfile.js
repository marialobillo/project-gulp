let gulp = require('gulp')
let sass = require('gulp-sass')

gulp.task('hello', function () {
  console.log('Hello Maria')
})

gulp.task('sass', function () {
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})

gulp.task('sass2', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})

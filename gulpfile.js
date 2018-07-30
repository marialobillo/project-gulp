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

gulp.task('task', function () {
  return gulp.src('')
    .pipe(aGulpPlugin({
      key: value,
      key2: value2
    }))
    .pipe(aGulpPlugin(myGuplOptions))
})

var myGuplOptions = {
  key: value,
  key2: value2
}

// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['tasks', 'to', 'run'])

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['scss'])
})

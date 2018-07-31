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
  key: 'hello',
  key2: 'hi'
}

// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['tasks', 'to', 'run'])

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['scss'])
})

// handle errors
gulp.task('sass3', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', errorHandler))
    .pipe(gulp.dest('app/css'))
})

function errorHandler(err){
  // Logs out error in the command line
  console.log(err.toString());
  // Ends the current pipe, so Gulp watch doesn't break
  this.emit('end');
}

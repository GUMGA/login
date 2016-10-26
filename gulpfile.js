var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    chalk = require('chalk'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')
    
    
    

function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/components/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.end()
}

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(rename('gumga-layout.min.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

gulp.task('bundle-js', function () {
  var bundler = browserify('./src/components/index.js', { debug: true })
      .transform(babelify, {presets: ["es2015"]})

  return bundle_js(bundler)
})

gulp.task('bundle-js-production', function () {
  var bundler = browserify('./src/components/index.js').transform(babelify, {presets: ["es2015"]})

  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename('gumga-layout.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

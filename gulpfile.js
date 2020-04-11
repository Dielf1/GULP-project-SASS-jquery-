'use strict';

const gulp        = require('gulp'),
      sass        = require('gulp-sass');
const browsersync = require('browser-sync');
var browserSync = require('browser-sync').create();


gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.sass') // берём все sass-файлы 
        .pipe(sass())                     // компиляция sass в css 
        .pipe(gulp.dest('app/css'))   // выгружаем результат 
        .pipe(browserSync.stream());
});





gulp.task("watch", function() {
    gulp.watch('app/sass/main.sass', gulp.parallel('sass'));
  });


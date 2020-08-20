const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('common/scss/*.scss')
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('common/scss/*.scss', gulp.task('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));
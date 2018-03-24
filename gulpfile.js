const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function() {
  const folders = [
    ['src/**/*.html'],
    ['src/**/*.png', 'src/**/*.jpg'],
    ['src/lib/**/*'],
  ];
  const dist = ['./dist/','./dist/','./dist/lib/']

  folders.forEach(function(folder, index) {
    folder.forEach(function(file) {
      gulp.src(file)
          .pipe(gulp.dest(dist[index]));
    })
  })
});

gulp.task('clean', function() {
  return del.sync([
    './dist/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);

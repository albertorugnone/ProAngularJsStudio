var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');


gulp.task('watch', function () {
    watch('app/**/*', function(event) {
    	gulp.src(event.path).pipe(connect.reload());
    });
});




gulp.task('connect', ['watch'], function() {
    connect.server(
        {
            root: ['app'],
            port: 8001,
            livereload: true
        }
    );
});

gulp.task('default', ['connect']);

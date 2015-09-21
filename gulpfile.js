var gulp = require('gulp'),
		sass = require('gulp-sass'),
		prefix = require('gulp-autoprefixer');

/**
 * Compile scss files in public/css
 */
gulp.task('sass', function () {
	return gulp.src('public/css/style.scss')
		.pipe(sass({includePaths: ['public/css']}))
		.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('public/css'));
});

/**
 * Watch scss files for changes & recompile
 */
gulp.task('watch', function () {
	gulp.watch('public/css/**.scss', ['sass']);
});

/**
 * Default task, running just `gulp` will compile the sass
 */
gulp.task('default', ['watch']);
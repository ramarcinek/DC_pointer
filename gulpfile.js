let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', () =>{
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});


gulp.task('watch', () =>{
	gulp.watch('app/scss/**/*.scss', ['sass']);
});


gulp.task('minify-css', () =>{
	return gulp.src('app/css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('app/css'))
});


gulp.task('autoprefixer', () =>{
	gulp.src('app/css/*.css')
	.pipe(autoprefixer())
	.pipe(gulp.dest('app/css'))
});

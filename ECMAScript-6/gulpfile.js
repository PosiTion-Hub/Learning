"use strict"
const gulp = require('gulp'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps');
	
	
gulp.task('default', () => {
	
	return gulp.src('src/js/before/ECMAScript_Test.js')
			.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015'],
				plugins:'cmd'
			}))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('src/js/after'));
});












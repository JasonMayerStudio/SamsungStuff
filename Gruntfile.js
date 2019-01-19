module.exports = function(grunt) {
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),
 		compass: {
 			dist: {
 				options: {
 					sassDir: 'assets/styles/',
 					cssDir: 'assets/styles/'
 				}
 			}
 		},
 		watch: {
 			css: {
 				files: '**/*.scss',
 				tasks: ['compass']
 			}
 		}
 	});
 

/*
 * learning-yeoman-ch8
 *
 *
 * Copyright (c) 2014 Jonnie Spratley
 * Licensed under the MIT license.
<<<<<<< HEAD
 */'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('learning_yeoman_ch8', 'This is an example plugin.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			punctuation : '.',
			separator : ', ',
			template: '',
			data: {
				name: 'Jonnie'
			}
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			// Concat specified files.
			var src = file.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if(!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read file source.
				
				
				grunt.log.ok('Filepath "' + filepath + '" .');
				return grunt.file.read(filepath);
			}).join(grunt.util.normalizelf(options.separator));

			// Handle options.
			src += options.template;

			// Write the destination file.
			grunt.file.write(file.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});
=======
 */
'use strict';
module.exports = function (grunt) {

	/**
	 * Custom Grunt task example.
	 * @constructor
	 */
	function LearningYeomanCh8() {

		/**
		 * I merge task-specific and/or target-specific options with these defaults.
		 */
		var options = this.options( {
			punctuation: '.',
			separator: ', '
		} );

		/**
		 * I warn on and remove invalid source files (if nonull was set).
		 * @param filepath
		 * @returns {boolean}
		 */
		var checkFiles = function (filepath) {
			if (!grunt.file.exists( filepath )) {
				grunt.log.warn( 'Source file "' + filepath + '" not found.' );
				return false;
			} else {
				return true;
			}
		};

		/**
		 * I read the source contents from the specified file.
		 * @param file
		 * @returns {*|string}
		 */
		var readSource = function (file) {
			return file.src.filter( checkFiles ).map( function (filepath) {
				return grunt.file.read( filepath );
			} ).join( grunt.util.normalizelf( options.separator ) );
		}

		/**
		 * I handle reading and writing a file with the passed in options template.
		 * @param file
		 */
		var readWriteFile = function (file) {
			var src = readSource( file );
					src += options.punctuation;

			grunt.file.write( file.dest, src );
			grunt.log.writeln( 'File "' + file.dest + '" created.' );
		};

		// Iterate over all specified file groups.
		this.files.forEach( readWriteFile );

	};
	grunt.registerMultiTask( 'learning_yeoman_ch8', 'This is an example plugin.', LearningYeomanCh8 );
>>>>>>> 647bcb4d059a50701f41c19aa8b399170d2ad65d
};

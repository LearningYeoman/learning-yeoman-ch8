/*
 * learning-yeoman-ch8
 *
 *
 * Copyright (c) 2014 Jonnie Spratley
 * Licensed under the MIT license.
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
			template: 'Hello <%= name %>',
			data: {
				name: 'Learning Yeoman'
			}
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
			} ).join( grunt.util.normalizelf( '' ) );
		};

		/**
		 * I handle reading and writing a file with the passed in options template.
		 * @param file
		 */
		var readWriteFile = function (file) {
			var src = readSource( file );
			src += grunt.template.process( options.template, {data: options.data} );

			grunt.file.write( file.dest, src );
			grunt.log.writeln( 'File "' + file.dest + '" created.' );
		};

		// Iterate over all specified file groups.
		this.files.forEach( readWriteFile );

	}

	grunt.registerMultiTask( 'learning_yeoman_ch8', 'This is an example plugin.', LearningYeomanCh8 );
};

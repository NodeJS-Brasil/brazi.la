'use strict';

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	var reloadPort = 35729;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		develop: {
			server: {
				file: 'index.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				globalstrict: true,
				quotmark: 'single',
				smarttabs: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				indent: 4,
				undef: true,
				unused: true,
				evil: true,
				devel:true,
				jquery: true,
				node: true,
				ignores: ['node_modules/**/*']
			},
			uses_defaults: ['**/*.js'],
		},
		watch: {
			options: {
				nospawn: true,
				livereload: reloadPort
			},
			server: {
				files: [
					'**/*.js'
				],
				tasks: ['develop:server']
			}
		}
	});

	grunt.config.requires('watch.server.files');
	grunt.registerTask('default', ['develop', 'watch']);
	grunt.registerTask('test', ['jshint']);
};

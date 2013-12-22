'use strict';

module.exports = function(grunt) {
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
				jshintrc: '.jshintrc',
				ignores: [ 'node_modules/**/*' ]
			},
			uses_defaults: [ '**/*.js' ],
		},
		jscs: {
			uses_defaults: '<%= jshint.uses_defaults %>'
		},
		watch: {
			options: {
				nospawn: true,
				livereload: reloadPort
			},
			server: {
				files: [ '**/*.js'  ],
				tasks: [ 'develop:server' ]
			}
		}
	});

	grunt.config.requires('watch.server.files');
	grunt.registerTask('default', [ 'develop', 'watch' ] );
	grunt.registerTask('test', [ 'jshint', 'jscs' ] );
};

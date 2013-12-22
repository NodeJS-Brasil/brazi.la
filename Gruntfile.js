'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

    var appConfig = {

        config: {
            reloadPort: 35729,
            jsFiles: '**/*.js'
        },

        pkg: grunt.file.readJSON('package.json'),

        develop: {
            server: {
                file: 'index.js'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: 'node_modules/**/*'
            },
            uses_defaults: '<%= config.jsFiles %>'
        },

        jscs: {
            uses_defaults: '<%= jshint.uses_defaults %>'
        },

        watch: {
            options: {
                nospawn: true,
                livereload: '<%= config.reloadPort %>'
            },
            server: {
                files: [
                    '<%= config.jsFiles %>'
                ],
                tasks: 'develop'
            }
        }
    };

	grunt.initConfig(appConfig);

	grunt.config.requires('watch.server.files');

	grunt.registerTask('default', [ 'develop', 'watch' ]);
	grunt.registerTask('test', [ 'jshint' ]);
};

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
};

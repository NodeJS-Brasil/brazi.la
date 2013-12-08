'use strict';

var path = require('path'),
    config;

config = {

	general: {
		lang: 'en_US',
		admin_url: '/admin',
		modules_url: '/modules',
		themes_url: '/themes',
		app_url: '/app'
		active_theme: 'rio',
		actived_modules: [
			'hello'
		]
	},

    development: {
        url: 'http://my-ghost-blog.com',
        mail: {},
        database: {},
    },

    production: {},

};

// Export config
module.exports = config;

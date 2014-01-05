'use strict';

exports.init = function(userConfigs) {

	var extend = require('../includes/extend'),
		configs = {},
		configs_default = {
			general: {
				lang: 'en_US',
				debug: false,
				admin_url: 'admin',
				modules_folder: 'modules',
				themes_folder: 'themes',
				upload_folder: 'uploads',
				environment: 'development'
			},
			personal: {
				active_theme: 'default',
				actived_modules: []
			}
		};

	configs = extend(configs_default, userConfigs);

	if (this.validateConfigs(configs)){
		this.initServer(configs);
	}
};

exports.initServer = function(configs) {

	var express = require('express'),
		params = require('express-params'),
		brazila = express(),
		environment;

	if (configs.general.environment === 'development'){
		environment = configs.development;
	} else {
		environment = configs.production;
	}

	brazila.use(express.compress());
	brazila.use(express.favicon(''));
	brazila.use(express.logger('dev'));
	brazila.use(express.urlencoded());
	brazila.use(express.json());
	brazila.use(express.methodOverride());
	brazila.use(brazila.router);

	params.extend(brazila);
	brazila.listen(environment.port, function() {
		console.log('Brazi.la server listening on port ' + environment.port);
	});

};

exports.validateConfigs = function(userConfigs) {

	if (typeof userConfigs !== 'object') {
		console.log('The configs settings need to be a object. Access http://brazi.la/getting-start for more information');
        return false;
	}

	if (!userConfigs.development || !userConfigs.production) {
		console.log('You need the environment configurations. Access http://brazi.la/getting-start for more information');
        return false;
	}

	return true;

};
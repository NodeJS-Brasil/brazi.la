'use strict';

exports.init = function(userConfigs) {

	var extend = require('../includes/extend'),
		configs = {},
		configs_default = {
			general: {
				lang: 'en_US',
				debug: false,
				admin_url: 'admin',
				modules_url: 'modules',
				themes_url: 'themes',
				uploads: 'uploads',
				environment: 'development'
			},
			personal: {
				active_theme: 'default',
				actived_modules: []
			}
		};

	configs = extend(configs_default, userConfigs);
	if (this.validateConfigs(configs) === true){
		this.initServer(configs);
	} else {
		console.log(this.validateConfigs(configs));
	}
};

exports.initServer = function(configs) {

	var express = require('express'),
		params = require('express-params'),
		brazila = express(),
		environment;

	if (configs.environment === 'development'){
		environment = configs.development;
	} else {
		environment = configs.production;
	}

	brazila.use(express.compress());
	brazila.set('port', environment.port);
	brazila.use(express.favicon(''));
	brazila.use(express.logger('dev'));
	brazila.use(express.bodyParser());
	brazila.use(express.methodOverride());
	brazila.use(brazila.router);

	params.extend(brazila);
	brazila.listen(environment.port, function() {
		console.log('Brazi.la server listening on port ' + environment.port);
	});

};

exports.validateConfigs = function(userConfigs) {

	if (typeof userConfigs !== 'object') {
		return 'The configs settings need to be a object. Access http://brazi.la/getting-start for more information';
	}

	if (!userConfigs.development || !userConfigs.production) {
		return 'You need the environment configurations. Access http://brazi.la/getting-start for more information';
	}

	return true;

};
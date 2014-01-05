'use strict';

var fs = require('fs'),
	path = require('path'),
	core = require('./system/core'),
	config,
	validConfig;

fs.exists(path.resolve(__dirname, 'config.json'), function(exist) {

	if (!exist){
		return console.error('Missing Config file');
	}

	config = require('./config.json');
	validConfig = core.validateConfigs(config);

	if (validConfig) {
		core.init(config);
	}

});
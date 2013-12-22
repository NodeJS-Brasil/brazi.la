'use strict';

var fs = require('fs'),
	path = require('path'),
	core = require('./system/core'),
	config,
	validConfig,
	paths;

fs.exists(path.resolve(__dirname, 'config.js'), function(exist){

	if(!exist){
		return console.error('Missing Config file');
	}

	config = require('./config');
	validConfig = core.validateConfigs(config);

	if (validConfig === true) {
		core.init(config);
	} else {
		console.log(validConfig);
	}

});
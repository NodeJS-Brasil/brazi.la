'use strict';

var config = require('./config'),
	core = require('./system/core'),
	validConfig = core.validateConfigs(config);

if (validConfig !== true) {
	core.init(config);
} else {
	console.log(validConfig);
}
'use strict';

module.exports = function(userConfigs){

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
				active_theme: 'default',
				actived_modules: []
			},
			keys: {
				cookie: '[*A*FiM{cU=wwUHW#bMyxAfO,5Sgqq#g>ckR3!/I6c#m@:np`*XT/uD.&}>W2ICQ',
				salt: 't3R3UTHu@s|L%I*i[2dc[B]2Pz<lrW^OB!(`H*`lKv(4#|c^^T4<T@soHy[6P%ax',
			}
		};

	configs = extend(configs_default, userConfigs);
};
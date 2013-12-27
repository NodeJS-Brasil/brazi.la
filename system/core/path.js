'use strict';

var path = require('path'),
	root = path.resolve(__dirname, '../../');

module.exports = function(userConfig) {
	var paths = {
		'root' : root,
		'configFile' : path.join(root, 'config.js'),
		'systemPath' : path.join(root, 'system'),
		'adminPath' : path.join(root, 'system/admin'),
		'corePath' : path.join(root, 'system/core'),
		'includesPath' : path.join(root, 'system/includes'),
		'themeDefaultPath' : path.join(root, 'system/core/default-theme'),
		'modulesDefaultPath' : path.join(root, 'system/core/modules'),
		'themesPath' : path.join(root, userConfig.general.themes_folder),
		'modulesPath' : path.join(root, userConfig.general.modules_folder),
		'uploadPath' : path.join(root, userConfig.general.upload_folder),

		'activeThemePath' : path.join(root, userConfig.general.themes_folder, userConfig.personal.active_theme),
		'activeModules' : []
	};

	userConfig.personal.actived_modules.forEach(function(moduleName) {
		paths.activeModules.push(path.join(paths.modulesPath, moduleName));
	});

	return paths;
};
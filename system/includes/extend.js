/*!
 * @name js-extend v0.0.2
 * @author vmattos
 * @repository https://github.com/vmattos/js-extend
 */

'use strict';

var slice = Array.prototype.slice,
	each = Array.prototype.forEach;

function extend(obj) {
	if (typeof obj !== 'object') {
		throw obj + ' is not an object' ;
	}

	var sources = slice.call(arguments, 1);

	each.call(sources, function(source) {
		if (source) {
			for (var prop in source) {
				if (typeof source[prop] === 'object' && obj[prop]) {
					extend.call(obj, obj[prop], source[prop]);
				} else {
					obj[prop] = source[prop];
				}
			}
		}
	});

	return obj;
}

module.exports = extend;
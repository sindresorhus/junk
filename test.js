/*global describe, it */
'use strict';
var assert = require('assert');
var junk = require('./junk');

describe('junk#test()', function () {
	it('should match junk files', function () {
		var junkFiles = [
			'.DS_Store',
			'.AppleDouble',
			'.LSOverride',
			'Icon',
			'._test',
			'.Spotlight-V100',
			'.Trashes',
			'__MACOSX',
			'test~',
			'Thumbs.db',
			'ehthumbs.db',
			'Desktop.ini'
		];

		junkFiles.forEach(function (el) {
			assert(junk.test(el), el);
		});
	});
});

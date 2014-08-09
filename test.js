'use strict';
var test = require('ava');
var junk = require('./');

var fixture = [
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
	'Desktop.ini',
	'npm-debug.log',
	'.test.swp'
];

test('should match junk files', function (t) {
	fixture.forEach(function (el) {
		t.assert(junk.is(el));
	});
});

test('should not match non-junk files', function (t) {
	t.assert(junk.not('test'));
});

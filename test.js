import test from 'ava';
import m from './';

const fixture = [
	'.DS_Store',
	'.AppleDouble',
	'.LSOverride',
	'Icon\r',
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

const notFixture = [
	'test',
	'Icon',
	'Icons.woff'
];

test('matches junk files', t => {
	for (const el of fixture) {
		t.true(m.is(el));
	}
});

test('does not match non-junk files', t => {
	for (const el of notFixture) {
		t.true(m.not(el));
	}
});

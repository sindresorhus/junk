import test from 'ava';
import {isJunk, isNotJunk} from './index.js';

const fixture = [
	'.DS_Store',
	'.AppleDouble',
	'.LSOverride',
	'Icon\r',
	'._test',
	'.Spotlight-V100',
	'.Spotlight-V100/Store-V2/C6DBF25D-81D4-4B57-907E-B4A555E72C90/0.directoryStoreFile',
	'.Trashes',
	'__MACOSX',
	'test~',
	'Thumbs.db',
	'ehthumbs.db',
	'Desktop.ini',
	'npm-debug.log',
	'.test.swp',
	'@eaDir',
];

const notFixture = [
	'test',
	'Icon',
	'Icons.woff',
	'.Spotlight-V100-unicorn',
];

test('matches junk files', t => {
	for (const element of fixture) {
		t.true(isJunk(element));
	}
});

test('does not match non-junk files', t => {
	for (const element of notFixture) {
		t.true(isNotJunk(element));
	}
});

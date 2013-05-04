# junk [![Build Status](https://secure.travis-ci.org/sindresorhus/junk.png?branch=master)](http://travis-ci.org/sindresorhus/junk)

Helps you filter out OS junk files like .DS_Store and Thumbs.db


## Getting started

Install: `npm install --save junk`


## Example

```js
var fs = require('fs');
var junk = require('junk');

fs.readdir('path', function (err, files) {
	console.log(files);
	// ['.DS_Store', 'test.jpg']

	files = files.filter(function (file) {
		return !junk.test(file);
	});

	console.log(files);
	// ['test.jpg']
});
```


## Documentation


### junk.test(filename)

Convenience method to test a string against all the `junk.rules` entries.


### junk.rules

Returns an [array of regexes](test.js) you can match against.


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)

# object-deep-update :raised_hands:
https://travis-ci.org/zarkoselak/object-deep-update.svg?branch=master [![npm version](https://badge.fury.io/js/object-deep-update.svg)](https://badge.fury.io/js/object-deep-update)

Updates <b>ONLY</b> existing properties!!

## Example

```javascript
var updateObj = require('object-deep-update');

var obj1 = {
	t: 'test1',
	te: {
		t: tt,
		e: ee
	},
	ff: ['tt', 'ee', 'te']
};

var obj2 = {
	t: 'test2',
	te: {
		t: xx,
		e: yy
	},
	ff: ['xx', 'yy', 'zz'],
	qq: 'omg!'
};

var result = updateObj(obj1, obj2);

{
	t: 'test2',
	te: {
		t: xx,
		e: yy
	},
	ff: ['xx', 'yy', 'zz']
}
```

## Test

`npm test`

## License

MIT © Zarko Selak


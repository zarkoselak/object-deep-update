# object-update-js :raised_hands:

Updates <b>ONLY</b> existing properties!!

## Example

```javascript
var updateObj = require('object-update-js');

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
result -->
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

MIT


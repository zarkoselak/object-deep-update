var extend = require('./index.js');
var expect = require('chai').expect;

describe('ObjectExtend', function() {
	it('should update object attribute', function() {
		var result = extend({troll: 'face'}, {troll: 'loloo'});

		expect(result).to.deep.equal({troll: 'loloo'});
	});

	it('should not add new property', function() {
		var result = extend({troll: 'face'}, {rofl: 'copter'});

		expect(result).to.not.have.property('rofl');
	});

	it('should update nested properties', function() {
		var troll = {
			face: 'trollface',
			color: {
				red: true
			}
		};

		var roll = {
			face: 'roll',
			color: {
				red: false
			}
		};
		var result = extend(troll, roll);

		expect(result).to.have.property('color')
			.that.deep.equals({red: false});
	});

	it('should return object', function() {
		var troll = {troll: 'face'};
		var roll  = {roll: 'mace'};

		var result = extend(troll, roll);

		expect(result).to.be.an('object');
	});
});
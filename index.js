'use strict';

module.exports = function deepUpdate(obj1, obj2) {
	for (var prop in obj2) {
	  try {
	    if ( obj2[prop].constructor === Object) {
	      obj1[prop] = deepUpdate(obj1[prop], obj2[prop])
	    } else if (obj1.hasOwnProperty(prop)) {
	      obj1[prop] = obj2[prop];
	    }
	  } catch(e) {
	    obj1[prop] = obj2[prop];
	  }
	}
	return obj1;
};
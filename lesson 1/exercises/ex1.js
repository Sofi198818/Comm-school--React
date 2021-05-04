
function equals(x, y) {
		if(x===y && Object.is(x,y) && Number.isNaN(x, y) && typeof(x) === typeof(y)) {
			return false;
		} else {
			return true;
		}
	}
	
	console.log(equals("12", 12));
	console.log(equals(0, -0));
	console.log(equals(0, NaN));
	console.log(equals(NaN, 0));
	console.log(equals(5, "5"));
	console.log(equals("john", "doe"));
	console.log(equals(false, true));
	console.log(equals(undefined, null));
	console.log(equals("john", "john"));
	console.log(equals(-0, -0));
	console.log(equals(5, 5));
	console.log(equals(false, false));
	console.log(equals(null, null));
	console.log(equals(undefined, undefined));
	console.log(equals(NaN, NaN));
	console.log(equals(0, 0));

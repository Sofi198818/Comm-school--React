
function equals(x, y) {
const isNegZeroX = checkNegZero(x);
const isNegZeroY = checkNegZero(y);
if(isNegZeroX || isNegZeroY) {
	return isNegZeroX && isNegZeroY;
}

if(checkNaN(x) && checkNaN(y)){
	return true;
}
	return x === y;
}
function checkNegZero(x){
	return x === 0 && 1 / x == Infinity;
}	
function checkNaN(x){
	return x !== x
}


	console.log(equals("12", 12) === false);
	console.log(equals(0, -0) === false);
	console.log(equals(0, NaN) === false);
	console.log(equals(NaN, 0) === false);
	console.log(equals(5, "5") === false);
	console.log(equals("john", "doe") === false);
	console.log(equals(false, true) === false);
	console.log(equals(undefined, null) === false);
	
	console.log(equals("john", "john") === true);
	console.log(equals(-0, -0) === true);
	console.log(equals(5, 5) === true);
	console.log(equals(false, false) === true);
	console.log(equals(null, null) === true);
	console.log(equals(undefined, undefined) === true);
	console.log(equals(NaN, NaN) === true);
	console.log(equals(0, 0) === true);
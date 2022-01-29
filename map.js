"use strict";

//map1
Array.prototype.mymap = function (callback) {
	const resultArray = [];
	for (let index = 0; index < this.length; index++) {
		resultArray.push(callback(this[index], index, this));
	}
	return resultArray;
};

//map2
function map(arr, mapFunc) {
	const mapArr = [];
	for (let i = 0; i < arr.length; i++) {
		const result = mapFunc(arr[i], i, arr);
		mapArr.push(result);
	}
	return mapArr;
}

//example
const sample = [1, 2, 3];
var output = sample.mymap(function (val, index, arra) {
	console.log("val:", val, "index:", index, "array:", array);
	return val * 2;
});

//example2
const squareArr2 = map(arr, (num) => num ** 2);
console.log(squareArr2); // prints [1, 4, 9, 16, 25]

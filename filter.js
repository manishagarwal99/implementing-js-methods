function filter(arr, filterFunc) {
	const filterArr = [];
	for (let i = 0; i < arr.length; i++) {
		const result = filterFunc(arr[i], i, arr);
		if (result) filterArr.push(arr[i]);
	}
	return filterArr;
}

const oddArr2 = filter(arr, (num) => num % 2 === 0);
console.log(oddArr2); //prints [2, 4]

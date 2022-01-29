//reduce1
const myReduce = (list, initialValue, reducer) => {
	if (list.length === 0) {
		return initialValue;
	} else {
		const [first, ...rest] = list;
		const updatedAcc = reducer(initialValue, first);
		return myReduce(rest, updatedAcc, reducer);
	}
};

//reduce2
function reduce(arr, reducer, initialValue) {
	let accumulator = initialValue === undefined ? 0 : initialValue;
	for (let i = 0; i < arr.length; i++)
		accumulator = reducer(accumulator, arr[i], i, arr);
	return accumulator;
}

//example1
const countWords = (wordList) => {
	return myReduce(wordList, {}, (acc, word) => {
		acc[word] = (acc[word] || 0) + 1;
		return acc;
	});
};

//example2
const sum2 = reduce(arr, sumReducer, 5);
console.log(sum2); // prints 15

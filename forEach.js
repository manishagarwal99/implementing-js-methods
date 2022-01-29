function myEach(callback) {
	for (let i = 0; i < this.length; i += 1) {
		callback(this[i], i, this);
	}
}

const arr = [1, "ashok", 3, 4];
arr.myEach((el) => console.log(el));

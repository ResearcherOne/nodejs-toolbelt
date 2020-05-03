var getTheAnswer = function (reveal) {
	return new Promise(function (resolve, reject) {
		if (reveal) {
			resolve(42);
		} else {
			reject('You are not ready yet.');
		}
	});
};

getTheAnswer(true).then(function (answer) {
	console.log(answer);
}).catch(function (err) {
	console.warn(err);
});
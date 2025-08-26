const fetchData = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Data loaded!");
		}, 5000);
	});
}
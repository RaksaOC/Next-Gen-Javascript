// Exercise 2: Use async/await to get your bank account balance.
// 1. Call the fetchBankAccountBalanceSimulated function using await.
// 2. Store the result in a variable.
// 3. Print: "Your bank account balance is <balance> USD" to the console.


//! Don't forget to use await when calling the fetch function.

//* This is a function to simulate fetching data which takes 2 seconds to resolve.
//* Don't pay attention too much to this function, it is just a simulation
const fetchBankAccountBalanceSimulated = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1000);
		}, 2000);
	});
};

const run = async () => {
	// code here:
};

run();

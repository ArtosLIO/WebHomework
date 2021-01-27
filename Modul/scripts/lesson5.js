const URL = 'https://jsonplaceholder.typicode.com/todos/1';

const usersURL = URL + '/users';

let users = [];

const getUsers = async () => {
	const getUsersReq = await fetch(usersURL);
	const data = await getUsersReq.json();
	// await стопает код, до того момента пока не придет ответ
	users = data;

	// const getUsersReq = fetch(usersURL);
	// getUsersReq
	// 	.then((res) => {
	// 		res.json()
	// 			.then((parsedRes) => {
	// 				console.log(parsedRes);
	// 			}
	// 		)
	// 	})
}

const userListElem = document.getElementById('user-list');

const start = async () => {
	await getUsers();

	showUsers(users);
	addNewUserButtonHandler();

	// const element = document.getElementById('test-id');
	// const spanElements = document.getElementsByClassName('text');

	// console.log(element);
	// console.log(spanElements);
}

// function getNumber(){
// 	let number = 0;

// 	return () => {
// 		return ++number;
// 	}
// }

// const newFunction = getNumber();

// let newNumber = newFunction();
// console.log(newNumber);	// 1

// newNumber = newFunction();
// console.log(newNumber);	// 2

start();
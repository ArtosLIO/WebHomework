// Task 1

function number(form){
	let positive = "Positive number!";
	let negative = "Negative number!";
	let num = parseFloat(form.task_one.value)

	if (num >= 0){
		document.getElementById("answer").innerText = positive;
	} else {
		document.getElementById("answer").innerText = negative;
	}
}

// Task 2

let sum = 0;
let sumNum = "";
for(let i = 1; i <= 10; i++){
	let val = i * 5;
	sum += val;
	sumNum += val + " + ";
}
sumNum = sumNum.substr(0, (sumNum.length - 3)) + " = " + sum;
document.getElementById("sumTenNumber").innerText = sumNum;

// Task 3

let numbers = [254, 115, 78, 25, 91, 45, 37];
let allNum = "All numbers: ";
let bigNum = "Big numbers: ";
for(let i = 0; i < numbers.length; i++){
	if(numbers[i] > 50){
		bigNum += numbers[i] + ', ';
	}
	allNum += numbers[i] + ', ';
}
document.getElementById("allNumbers").innerText = allNum.substr(0, allNum.length - 2);
document.getElementById("bigNumbers").innerText = bigNum.substr(0, bigNum.length - 2);




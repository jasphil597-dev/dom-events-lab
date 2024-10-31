// Pseudocode
// Step 1: When user clicks a number display it to the screen
//         If they click another number it should add on to the display
//         Store the number if no operator is clicked as numOne
// Step 2: If a user clicks an operator
//         Add operator to the display
//         If another operator is clicked, replace the existing one
// Step 3: If the user clicks another number start adding that to the display
//         Store value after operator as numTwo
// Step 4: If the user clicks = then calculate the numOne + operator + numTwo
//         Display the result
// Step 5: If a user clicks clear at any time, clear the display as well as numOne and numTwo

//	Ref: Emre

// Variables
let numOne = '';
let numTwo = '';
let operator = '';
let calcOutput = '';

// Cached Elements (NOT CONSTANTS)
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const equalsBtn = document.querySelector('.equals');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

// Functions
const clearClick = (event) => {
	display.innerText = '';
	numOne = '';
	numTwo = '';
	operator = '';
	calcOutput = '';

	operatorBtns.forEach((btn) => {
		btn.style.border = '';
	});
};

const numClick = (event) => {
	if (calcOutput) {
		clearClick();
	}

	if (numOne && operator) {
		display.innerText += event.target.innerText;
		numTwo = display.innerText;
	} else {
		display.innerText += event.target.innerText;
		numOne = display.innerText;
	}
};

const operatorClick = (event) => {
	const clickedOperator = event.target.innerText;
	operator = clickedOperator;

	operatorBtns.forEach((btn) => {
		btn.style.border = '';
	});
	event.target.style.border = '2px white solid';
	display.innerText = '';
};

const equalsClick = (event) => {
	// Take numOne and numTwo and calculate them, based on operator
	calcOutput = eval(numOne + operator + numTwo);
	display.innerText = calcOutput;
};

// Event listeners
clearBtn.addEventListener('click', clearClick);
equalsBtn.addEventListener('click', equalsClick);

numberBtns.forEach((btn) => {
	btn.addEventListener('click', numClick);
});

operatorBtns.forEach((btn) => {
	btn.addEventListener('click', operatorClick);
});

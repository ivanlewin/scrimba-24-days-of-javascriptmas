/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like
it wold in real life. Using the pre-made dice face that represents ‘one’, make the
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

const dice = document.querySelector(".dice");
const dots = Array.from(document.querySelectorAll(".dot"));
const diceRoll = document.getElementById("dice-roll")

const numbers = {
	"1": "one",
	"2": "two",
	"3": "three",
	"4": "four",
	"5": "five",
	"6": "six",
}

dice.addEventListener("click", () => {
	const rolled = Math.floor(Math.random() * 6) + 1;
	const rolledClass = numbers[rolled].toString();

	dots.forEach(dot => dot.classList.add("white")); // clear all dots

	// remove the white (hidden) class from the dots needed to make the dice face
	const rolledDots = dots.filter(dot => dot.classList.contains(rolledClass));
	rolledDots.forEach(dot => dot.classList.remove("white"));

	diceRoll.textContent = rolled;
})

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/

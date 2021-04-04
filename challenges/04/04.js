const centuryFromYear = num => {
	if (num % 100 === 0) return num / 100; // For years multiple of 100 (1800, 1900, ...)
	return Math.floor(num / 100 + 1); // Any other year: Math.floor(1701 / 100) = 17, add 1 => 18
}

/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
	it('returns current century', () => {
		// arrange
		const year = 1905;

		// act
		const result = centuryFromYear(year);

		// log
		console.log("result 1: ", result);

		// assert
		expect(result).toBe(20);
	});

	it('returns current century for edge case of start of century', () => {
		// arrange
		const year = 1700;

		// act
		const result = centuryFromYear(year);

		// log
		console.log("result 2: ", result);

		// assert
		expect(result).toBe(17);
	});
});
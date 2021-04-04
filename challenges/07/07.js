const countVowelConsonant = str => {
	const vowels = ["a", "e", "i", "o", "u"];
	return str.split("").reduce((accumulator, currentValue) => {
		const value = vowels.includes(currentValue) ? 1 : 2;
		return accumulator + value;
	}, 0)
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
	it('returns total of vowels(1) and consonants(2) to be added', () => {
		// arrange
		const value = 'abcde';

		// act
		const result = countVowelConsonant(value);

		// log
		console.log("result: ", result);

		// assert
		expect(result).toBe(8);
	});
});
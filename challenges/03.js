const chunkyMonkey = (values, size) => [values.slice(0, size), values.slice(size)];

/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
	it('returns largest positive integer possible for digit count', () => {
		// arrange
		const values = ["a", "b", "c", "d"];
		const size = 2;

		// act
		const result = chunkyMonkey(values, size);

		// log
		console.log("result: ", result);

		// assert
		expect(result).toEqual([["a", "b"], ["c", "d"]]);
	});
});
function reverseAString(str) {
	//  write code here.
}



/**
* Test Suite 
*/
describe('reverseAString()', () => {
	it('returns original string reversed', () => {
		// arrange
		const str = 'hello';

		// act
		const result = reverseAString(str);

		// log
		console.log("result: ", result);

		// assert
		expect(result).toBe('olleh');
	});
});
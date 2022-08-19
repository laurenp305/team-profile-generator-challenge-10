const Manager = require('../lib/Manager');
const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE & INTERN TESTS
test('Test if we can get values for manager objects', () => {
    const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

    expect(newManager.officeNumber()).toEqual(expect.any(Number));
} );

test('Test to see if we can get the role'), () => {

    const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

    expect(newManager.getRole()).toEqual(expect.stringContaining('Manager'));
}

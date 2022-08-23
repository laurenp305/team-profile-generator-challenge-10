const Manager = require('../lib/Manager');

const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE & INTERN TESTS
test('Test if we can get values for manager objects', () => {
    expect(newManager.name).toBe('Jared');
    expect(newManager.id).toBe('1');
    expect(newManager.email).toBe('jared@fakemail.com');
    expect(newManager.officeNumber).toBe('1');
} )


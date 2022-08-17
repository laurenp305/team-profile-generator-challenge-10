const Manager = require('../lib/Manager');
const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE & INTERN TESTS
test('Test if we can get values for manager objects', () => {
    expect(newManager.getName()).toBe('Jared');
    expect(newManager.getId()).toBe('1');
    expect(newManager.getEmail()).toBe('jared@fakemail.com');
    expect(newManager.getOfficeNumber()).toBe('1');
} );

test('This is a test to see if we can get the value for the manager object', () => {
    expect(newManager.getName()).toBe('Jared');
    expect(newManager.getId()).toBe('5');
    expect(newManager.getEmail()).toBe('jared@fakemail');
    expect(newManager.getOfficeNumber()).toBe('1');
} );

test('Test to see if we can get the name from getName()', () => {
    expect(newManager.getName()).toBe('Jared');
});

test('Test to see if we can get the id from getId()', () => {
    expect(newManager.getId()).toBe('1');
});

test('Test to see if we can get the email from getEmail()', () => {
    expect(newManager.getEmail()).toBe('jared@fakemail.com');
} );

test('Test to see if we can get employees role from getRole') , () => {
    expect(newManager.getOfficeNumber()).toBe('1');
}


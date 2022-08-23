const Manager = require('../lib/Manager');

const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE & INTERN TESTS
test('Test if we can get values for manager objects', () => {
    expect(newManager.name).toBe('Jared');
    expect(newManager.id).toBe('1');
    expect(newManager.email).toBe('jared@fakemail.com');
    expect(newManager.officeNumber).toBe('1');
} )

test('Test for name with getName() method', () => {
    expect(newManager.getName()).toBe('Jared');
})

test('Test for name with getId() method', () => {
    expect(newManager.getId()).toBe('1');
})

test('Test for name with getEmail() method', () => {
    expect(newManager.getEmail()).toBe('jared@fakemail.com');
})

test('Test for name with getOfficeNumber() method', () => {
    expect(newManager.getOfficeNumber()).toBe('1');
})

test('Test for name with getRole() method', () => {
    expect(newManager.getRole()).toBe("Manager");
})
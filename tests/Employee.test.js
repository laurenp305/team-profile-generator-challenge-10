const Employee = require('.lib/Employee');
const newEmployee = new Employee('Jared', '1', 'jared@fakemail.com');

test('This is a test to see if we can get the value for the employee object', () => {
    expect(newEmployee.getName()).toBe('Jared');
    expect(newEmployee.getId()).toBe('1');
    expect(newEmployee.getEmail()).toBe('jared@fakemail.com');
});

test('Test to see if we can get the name from getName()', () => {
    expect(newEmployee.getName()).toBe('Jared');
});

test('Test to see if we can get the id from getId()', () => {
    expect(newEmployee.getId()).toBe('1');
});

test('Test to see if we can get the email from getEmail()', () => {
    expect(newEmployee.getEmail()).toBe('jared@fakemail.com');
} );

test('Test to see if we can get employees role from getRole') , () => {
    expect(newEmployee.getRole()).toBe('Employee');
}



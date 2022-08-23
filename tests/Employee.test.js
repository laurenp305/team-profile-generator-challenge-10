const Employee = require('../lib/Employee');

//creates new employee object
const newEmployee = new Employee('Jared', 1, 'jared@fakemail.com');

test('This is a test to see if we can get the value for the employee object', () => {
    expect(newEmployee.name).toBe('Jared');
    expect(newEmployee.id).toBe('1');
    expect(newEmployee.email).toBe('jared@fakemail.com');
    expect(newEmployee.role).toBe('Employee');
})

//Tests for name
test('Test to see if we can get the name from getName', () => {
    expect(newEmployee.getName()).toBe('Jared');
})

//Tests for ID
test('Test to see if we can get the id from getId', () => {
    expect(newEmployee.getId()).toBe('1');
})

//Tests for email
test('Test to see if we can get the email from getEmail', () => {
    expect(newEmployee.getEmail()).toBe('jared@fakemail.com');
})

//Tests for role
test('Test to see if we can get employees role from getRole', () => {
    expect(newEmployee.getRole()).toBe('Employee');
})



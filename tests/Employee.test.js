const Employee = require('.lib/Employee');

//creates new employee object
const newEmployee = new Employee('Jared', '1', 'jared@fakemail.com');

test('This is a test to see if we can get the value for the employee object', () => {
    expect(newEmployee.getName()).toEqual(expect.any(String));
    expect(newEmployee.getId()).toEqual(expect.any(Number));
    expect(newEmployee.getEmail()).toEqual(expect.any(String));
});

test('Test to see if we can get the name from getName()', () => {
    expect(newEmployee.getName()).toEqual(expect.any(String));
});

test('Test to see if we can get the id from getId()', () => {
    expect(newEmployee.getId()).toEqual(expect.any(Number));
});

test('Test to see if we can get the email from getEmail()', () => {
    expect(newEmployee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
} );

test('Test to see if we can get employees role from getRole') , () => {
    expect(newEmployee.getRole()).toEqual("Employee");
}



const Intern = require('../lib/Intern');
const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE TEST
test('Tests if we can get values for intern objects', () => {
    expect(newIntern.getName()).toBe('John');
    expect(newIntern.getId()).toBe('5');
    expect(newIntern.getEmail()).toBe('john@fakemail.com');
    expect(newIntern.getSchool()).toBe('2University');
} );

test('Tests if we can get the value for the employee object', () => {
    expect(newIntern.getName()).toBe('John');
    expect(newIntern.getId()).toBe('5');
    expect(newIntern.getEmail()).toBe('john@fakemail');
    expect(newIntern.getSchool()).toBe('2University');
} );

test('Tests if we can get the name from getName()', () => {
    expect(newIntern.getName()).toBe('John');
});

test('Tests if we can get the id from getId()', () => {
    expect(newIntern.getId()).toBe('5');
});

test('Tests if we can get the email from getEmail()', () => {
    expect(newIntern.getEmail()).toBe('john@fakemail');
} );

test('Tests if we can get employees role from getRole') , () => {
    expect(newIntern.getSchool()).toBe('2University');
}


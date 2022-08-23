const Intern = require('../lib/Intern');

const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE TEST
test('Tests if we can get values for intern objects', () => {

    expect(newIntern.name).toBe('John');
    expect(newIntern.id).toBe('5');
    expect(newIntern.email).toBe('john@fakemail.com');
    expect(newIntern.school).toBe("2University");

} )
//Tests for name
test('Tests for name with getName() method', () => {
    expect(newIntern.getName()).toBe('John');
})

//Tests for ID
test('Tests for name with getId() method', () => {
    expect(newIntern.getId()).toBe('5');
})

//Tests for email
test('Tests for name with getEmail() method', () => {
    expect(newIntern.getEmail()).toBe('john@fakemail.com');
})

//Tests for school
test('Tests for name with getSchool() method', () => {
    expect(newIntern.getSchool()).toBe("2University");
})

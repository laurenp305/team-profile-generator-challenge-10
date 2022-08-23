const Intern = require('../lib/Intern');

const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE TEST
test('Tests if we can get values for intern objects', () => {

    expect(newIntern.name).toBe('John');
    expect(newIntern.id).toBe('5');
    expect(newIntern.email).toBe('john@fakemail.com');
    expect(newIntern.school).toBe('2University');

} )

test('Tests if we can get values from getSchool', () => {

    const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

    expect(newIntern.getSchool()).toEqual(expect.stringContaining(newIntern.school.toString()));
})

test('Tests if we can get the role from getRole' , () => {
    const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

    expect(newIntern.getRole()).toEqual(expect.stringContaining('Intern'));
})
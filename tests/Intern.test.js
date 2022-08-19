const Intern = require('../lib/Intern.js');

//DID THIS THE SAME WAY I RAN THE EMPLOYEE TEST
test('Tests if we can get values for intern objects', () => {

    const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

    expect(newIntern.getName()).toEqual(expect.any(String));

} );

test('Tests if we can get values from getSchool', () => {

    const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

    expect(newIntern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Tests if we can get the role from getRole') , () => {
    const newIntern = new Intern('John', '5','john@fakemail.com', '2University');

    expect(newIntern.getRole()).toEqual(expect.stringContaining('Intern'));
}
const Engineer = require('../lib/Engineer');

const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

//DID THIS THE SAME WAY I RAN THE INTERN TEST
test('Tests if we can get values for engineer objects', () => {

    const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

    expect(newEngineer.getGitHub()).toEqual(expect.any(String));
} )

test('Tests if we can get Github username gitHub' , () => {

    const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

    expect(newEngineer.getGitHub()).toEqual(expect.stringContaining(newEngineer.github.toString()));
})

test('Tests if we can get the role from getRole' , () => {
    const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

    expect(newEngineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

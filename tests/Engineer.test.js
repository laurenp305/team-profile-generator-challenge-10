const Engineer = require('../lib/Engineer');
const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

//DID THIS THE SAME WAY I RAN THE INTERN TEST
test('Tests if we can get values for engineer objects', () => {
    expect(newEngineer.getName()).toBe('Alec');
    expect(newEngineer.getId()).toBe('2');
    expect(newEngineer.getEmail()).toBe('alec@fakemail.com');
    expect(newEngineer.getGitHub()).toBe('ibealec');
} );

test('Tests if we can get the name from getName()', () => {
    expect(newEngineer.getName()).toBe('Alec');
});

test('Tests if we can get the id from getId()', () => {
    expect(newEngineer.getId()).toBe('2');
});

test('Tests if we can get the email from getEmail()', () => {
    expect(newEngineer.getEmail()).toBe('alec@fakemail');
} );

test('Tests if we can get employees role from getRole') , () => {
    expect(newEngineer.getGitHub()).toBe('ibealec');
}


const Engineer = require('../lib/Engineer');

const newEngineer = new Engineer('Alec', '2','alec@fakemail.com', 'ibealec');

//DID THIS THE SAME WAY I RAN THE INTERN TEST
test('Tests if we can get constructor values for engineer objects', () => {

    expect(newEngineer.name).toBe('Alec');
    expect(newEngineer.id).toBe('2');
    expect(newEngineer.email).toBe('alec@fakemail.com');
    expect(newEngineer.gitHub).toBe('ibealec');
    
} )

//Test for name
test('Tests for name from getName method', () => {
    expect(newEngineer.getName()).toBe('Alec');
})

//Test for ID
test('Tests for ID from getID method', () => {
    expect(newEngineer.getId()).toBe('2');
})

//Test for email
test('Tests for email from getEmail method', () => {
    expect(newEngineer.getEmail()).toBe('alec@fakemail.com');
})

//Test for gitHub username
test('Tests for gitHub from getGitHub method', () => {
    expect(newEngineer.getGitHub()).toBe('ibealec');
})
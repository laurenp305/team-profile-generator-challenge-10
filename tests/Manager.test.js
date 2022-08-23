const Manager = require('../lib/Manager');
const newManager = new Manager('Jared', '1','jared@fakemail.com', '1');

//Office number test for manager
test("Set office number via constructor"), () => {
    const testNumber = 1;
    const newManager = new Manager('Jared', 1,'jared@fakemail.com', 1);
    expect(newManager.officeNumber).toBe(testNumber)
}

test('Test to see if we can get the role', () => {

    const newManager = new Manager('Jared', 1,'jared@fakemail.com', 1);

    expect(newManager.getRole()).toEqual(expect.stringContaining("Manager"));
})


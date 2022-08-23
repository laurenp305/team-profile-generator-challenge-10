const Manager = require('../lib/Manager');

//Office number test for manager
test("Set office number via constructor", () => {
    const testNumber = 1;

    const newManager = new Manager('Jared', 1,'jared@fakemail.com', 1);

    expect(newManager.officeNumber).toBe(testNumber)
})

//Test to see if we could get the role of the employee
test("Test to see if we can get the role", () => {
    const testRole = "Manager";

    const newManager = new Manager('Jared', 1,'jared@fakemail.com', 1);

    expect(newManager.getRole()).toBe(testRole);
})

//Test to see if the office number actually populates
test("Get office number", () => {
    const testNumber = 1;

    const newManager = new Manager('Jared', 1,'jared@fakemail.com', 1);

    expect(newManager.getOfficeNumber()).toBe(testNumber);
})


const Employee = require('../lib/employee');
const Manager = require('../lib/manager');


describe('Manager', () => {

    it("gets office number via officeNumber", () => {
        const number = 5555555555;
        const employee = new Manager("Ceri", 1, "fake@fakemail.com", number);
        expect(employee.getOfficeNumber()).toBe(number);
    });

    it("gets role of employee and return manager", () => {
        const role = "Manager";
        const employee = new Manager("Ceri", 1, "fake@fakemail.com", 100);
        expect(employee.getRole()).toBe(role);
    });
});
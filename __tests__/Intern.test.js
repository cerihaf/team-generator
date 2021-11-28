const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {

    it("return school via getSchool()", () => {
        const school = "k-state";
        const employee = new Intern("Ceri", 1, "fake@fakemail.com", school);
        expect(employee.getSchool()).toBe(school);
    });

    it("gets role of employee and return intern", () => {
        const role = "Intern";
        const employee = new Intern("Ceri", 1, "fake@fakemail.com", "k-state");
        expect(employee.getRole()).toBe(role);
    });
});
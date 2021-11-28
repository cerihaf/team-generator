const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {

    it("return GitHub account via constructor", () => {
        const github = "cerihaf";
        const employee = new Engineer("Ceri", 1, "email@fakemail.com", github);
        expect(employee.getGithub()).toBe(github);
    });

    it("gets role of employee and return engineer", () => {
        const role = "Engineer";
        const employee = new Engineer("Ceri", 1, "email@fakemail.com", "cerihaf");
        expect(employee.getRole()).toBe(role);
    });
}); 
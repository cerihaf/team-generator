const Employee = require('../lib/employee');

describe('Employee', () => {
    describe("Name", () => {
        it("Can set name via constructor arguments", () => {
            const name = "Ceri";
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
    });

    
    describe("ID", () => {
        it("Can set ID via constructor arguments", () => {
            const id = 125363574;
            const employee = new Employee("Ceri", id);
            expect(employee.id).toBe(id);
        });
    });

    describe("Email", () => {
        it("Can set email via constructor arguments", () => {
            const email = "email@fakemail.com";
            const employee = new Employee("Ceri", 1, email);
            expect(employee.email).toBe(email);
        });
    });

    describe("getName", () => {
        it("can get name via getName", () => {
            const name_get = "Ceri";
            const employee = new Employee(name_get);
            expect(employee.getName()).toBe(name_get);
        
    });

    describe("getId", () => {
        it("can get id via getId", () => {
            const id_get = 125363574;
            const employee = new Employee("Ceri", id_get);
            expect(employee.getId()).toBe(id_get);
        
        })});

    describe("getEmail", () => {
        it("can get email via getEmail", () => {
            const email_get = "email@fakemail.com";
            const employee = new Employee("Ceri", 1, email_get);
            expect(employee.getEmail()).toBe(email_get);
        
    })});

    describe("getRole", () => {
        it("getRole should return Employee", () => {
            const role = "Employee";
            const employee = new Employee("Ceri", 1, "email@fakemail.com");
            expect(employee.getRole()).toBe(role);
        
    });
  })})});
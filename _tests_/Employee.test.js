const Employee = require("../lib/employee");

describe ("Employee", () => {
it ('should contain a name property as well as a functions to call this property', () => {
const person = new Employee ("Me", 41, "@email");
expect(person.getName()).toBe("Me")
}); 
it ('should contain an email property as well as a functions to call this property', () => {
    const person = new Employee ("Me", 41, "@email");
    expect(person.getEmail()).toBe("@email")
}); 
it ('should contain an id property as well as a functions to call this property', () => {
    const person = new Employee ("Me", 41, "@email");
    expect(person.getId()).toBe(41)
}); 






























});
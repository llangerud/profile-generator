const Manager = require("../lib/manager");

describe ("Manager", () => {
it ('should contain a name property as well as a functions to call this property', () => {
const person = new Manager ("Me", 41, "@email", 3456);
expect(person.getName()).toBe("Me")
}); 
it ('should contain an email property as well as a functions to call this property', () => {
    const person = new Manager ("Me", 41, "@email");
    expect(person.getEmail()).toBe("@email")
}); 
it ('should contain an id property as well as a functions to call this property', () => {
    const person = new Manager ("Me", 41, "@email");
    expect(person.getId()).toBe(41)
}); 
it ('should contain an office number property', () => {
    const person = new Manager ("Me", 41, "@email", 3456);
    expect(person.officeNumber).toBe(3456)
}); 

});
const Intern = require("../lib/intern");

describe ("Intern", () => {
it ('should contain a name property as well as a functions to call this property', () => {
const person = new Intern ("Me", 41, "@email", "universityofsomewhere");
expect(person.getName()).toBe("Me")
}); 
it ('should contain an email property as well as a functions to call this property', () => {
    const person = new Intern ("Me", 41, "@email");
    expect(person.getEmail()).toBe("@email")
}); 
it ('should contain an id property as well as a functions to call this property', () => {
    const person = new Intern ("Me", 41, "@email");
    expect(person.getId()).toBe(41)
}); 
it ('should contain a school property as well as a functions to call this property', () => {
    const person = new Intern ("Me", 41, "@email", "universityofsomewhere");
    expect(person.getSchool()).toBe("universityofsomewhere")
}); 

});
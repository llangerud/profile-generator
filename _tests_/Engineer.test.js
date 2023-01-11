const Engineer = require("../lib/engineer");

describe ("Engineer", () => {
it ('should contain a name property as well as a functions to call this property', () => {
const person = new Engineer ("Me", 41, "@email");
expect(person.getName()).toBe("Me")
}); 
it ('should contain an email property as well as a functions to call this property', () => {
    const person = new Engineer ("Me", 41, "@email");
    expect(person.getEmail()).toBe("@email")
}); 
it ('should contain an id property as well as a functions to call this property', () => {
    const person = new Engineer ("Me", 41, "@email");
    expect(person.getId()).toBe(41)
}); 
it ('should contain a github property as well as a functions to call this property', () => {
    const person = new Engineer ("Me", 41, "@email", "engineer/github");
    expect(person.getGithub()).toBe("engineer/github")
}); 

});
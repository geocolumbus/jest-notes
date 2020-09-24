import Person from "../src/Person.js"

describe("Person class test", () => {
  it("should create a person", () => {
    const person = new Person("name", "address", 104)
    expect(person.name).toBe("name")
    expect(person.location).toBe("address")
    expect(person.fibNum).toBe(104)
  })
})

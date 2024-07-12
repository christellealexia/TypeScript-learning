function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var John = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(John));

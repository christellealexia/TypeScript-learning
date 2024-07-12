interface Student {
    firstName : string;
    lastName : string;
}

function getFullName(person : Student){
    return `${person.firstName} ${person.lastName}`
}

let John :Student = {
    firstName : 'John',
    lastName : 'Doe'
}

console.log(getFullName(John))
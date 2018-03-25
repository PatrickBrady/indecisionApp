var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameCast = 'Frank';
console.log('nameCast', nameCast);

//BLOCK SCOPING

const fullName = 'Jen Mean';
let firstName;
let lastName;

if(fullName){
    firstName = fullName.split(' ')[0];
    lastName = fullName.split(' ')[1];
    console.log(firstName);
}

console.log('First Name', firstName);
console.log('Last Name', lastName);
const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
}
// ALL arrow functions are anonymous

//same as
// arrow function expression syntax
// -- must be a case where it only returns a single exppression. 'return' is implied
const squareArrow2 = (x) => x * x;

const name = 'Patrick Brady';

const getFirst = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirst2 = (fullName) => fullName.split(' ')[0];













//Challenge - use arrow functions
//getFirstName('Mike Smith) -> "Mike"
//create regular arrow fnction
//create arrow function using shorthand

console.log(square(8));

const fullName = 'Pat Brady';
let firstName;
//if (fullName) {
//    fistName = fullName.split(' ')[0];
//    console.log(fistName);
//}

//const getFirstName = (name) => {
//   return name.split(' ')[0];
//}
const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Benjamin Owen Brady'));
// arguments no longer bound with arrow functions

const add = function(a,b){
    console.log(arguments);
    return a + b;
}

const addArrow = (a,b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55,1,200));

console.log(addArrow(55,1,200));


//this keyword is no longer bound

const user = {
    name: 'Pat',
    cities: ['Spring Lake', 'San Diego', 'Las Vegas'],
    //printPlacesLived: function() { --no longer need the : or function keyword for es6 methods
    //printPlacesLived:() {  <-- valid es6 function
        printPlacesLived() {
        console.log('inside print function ' + this.name);
        console.log('inside print function ' + this.cities);

        // map lets you transform each item. You get a new array back. For each JUST lets you do something to the array
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        //const that = this; workaround for the this binding issue. Another option is using an arrow function instead

        //this.cities.forEach(function (city){
        //    console.log(that.name + ' has lived in ' + city)
        //});

        //for each can be replaced with map function
        //this.cities.forEach((city) =>{
        //    console.log(this.name + ' has lived in ' + city);
        //});
    }
    
};

//method is a function defined on an object property. User is th eobject 'printPlacesLived' is the method. 
console.log(user.printPlacesLived());

//challenge
// numbers - array of numbers
//multiplyBy - single number
// multiply -  return a new array where the numbers have been multiplied

const multiplier = {
    numbers: [2,5,12,23],
    multiplyBy:2,
 
    multiply(){
        return this.numbers.map((number) => number + ' multiplied by ' + this.multiplyBy + ' is ' +  (this.multiplyBy * number));
    }

};
console.log(multiplier.multiply())
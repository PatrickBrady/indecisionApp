// setu a 2nd constructor to take name and age (default is 0)
// getDescription - Pat Brady is 35 years(s) old. 

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
        //console.log(name);
    }
    getGreeting() {
        //return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`; //<-- temlate string. We can inject values without having to concatinate. must use `
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
           description += ` His/her major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler  extends Person{
    constructor (name, age, homeLocation){
        super (name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
// create new sub class of person
//Traveler
//add home location
//override get greeting
// 1. if there is a home location include it "hi I am ________. I'm visiting from _______."
// 2 Hi I'm ________. 

//const me = new Student('Pat Brady', 35);
//const other = new Student('Ben Brady',8, 'Web Development');

const me = new Traveler('Pat Brady', 35);
const other = new Traveler('Ben Brady',8, 'San Diego');

console.log(me.getGreeting());
console.log(other.getGreeting());

//console.log(me.hasMajor());
//console.log(other.hasMajor());

//console.log(me.getDescription());
//console.log(other.getDescription());
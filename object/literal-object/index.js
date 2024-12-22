//todo: create object (using literal syntax - normal object যেটা class/constructor function থেকে create হয়নি )


const person={
    firstName:"Ashequr",
    lastName:"Rahman",
    age:25,
    height:"5.3``",
    weight:45,
    bloodGroup:"AB+",
    getIntro:function(){
        return `My name is ${person.firstName} ${person["lastName"]}`//must be access property from object name using dot/bracket notation.
    }
}
console.log(person.getIntro());
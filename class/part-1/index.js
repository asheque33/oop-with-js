//todo: class হলো  object er blueprint jeta theke unlimited obj create kora jabe, but class কোনো  ভাবেই রিডিক্লেয়ার করা যাবে না 
// class person {

//     firstName="Ashequr"
//     lastName="Rahman"//firstName, lastName these are variable but doesn't declare with let, const, var
//     getIntro=()=> `My name is ${this.firstName} ${this.lastName}`
// }

// class expression
const person=class{
    firstName="Ashequr"
    lastName="Rahman"//firstName, lastName these are variable but doesn't declare with let, const, var
    getIntro=()=> `My name is ${this.firstName} ${this.lastName}`

}

const objFromClass=new  person()//must give new keyword before Class constructor person
console.log(objFromClass);
console.log(objFromClass.getIntro());
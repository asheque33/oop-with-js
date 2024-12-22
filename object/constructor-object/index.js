//* হ্যাঁ, জাভাস্ক্রিপ্টে আপনি যদি class ব্যবহার না করেন, তাহলে সরাসরি function ব্যবহার করে একটি object তৈরি করতে পারেন। এই পদ্ধতিকে constructor function বলে। যখন কোনো function ব্যবহার করে object তৈরি করা হয়, তখন সেই object-টি ওই constructor function-এর instance হিসেবে বিবেচিত হয়।
//todo: function name use kore object make korle, func-> constructor function; object-> instance
// todo: instance ও এক প্রকার object, তবে তা constructor function  থেকে create করা হয়েছে(class  এর ক্ষেত্রেও একই কথা )
// Constructor function
function person(){
    this["firstName"]="Ashequr"
    this["lastName"]="Rahman";
    this["age"]=25
    this["bloodGroup"]="AB+"
    this.height="5.3``"
    this.weight=45
    this.getIntro=()=> `My name is ${person.firstName} ${person["lastName"]}`
    console.log("this inside func "+  this);//global object
}
const personInstance=new person();
console.log("this outside in the func",this);// empty object output: {}
console.log("person " +person());//undefined
console.log(personInstance);//object

//using a func name making a object processing is called a constructor object
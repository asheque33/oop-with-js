// create object of object(অবজেক্ট এর অস্তিত্ব তৈরি করে নেয়া )
// todo: instance ও এক প্রকার object, তবে তা class থেকে create করা হয়েছে(constructor function এর ক্ষেত্রেও একই কথা )

const person=new Object()
person["firstName"]="Ashequr"
person["lastName"]="Rahman"
person["age"]=25
person["bloodGroup"]="AB+"
person.height="5.3``"
person.weight=45
person.getIntro=()=> `My name is ${person.firstName} ${person["lastName"]}`
console.log(person.getIntro());
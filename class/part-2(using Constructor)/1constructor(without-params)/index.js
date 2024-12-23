//todo: constructor er নাম constructor ই হতে হবে 
//todo: constructor parameter receive kore
//todo: যখনই object create হয়,তখনই constructor automatically execute হয়ে যায়, আলাদা করে ফাংশন এর মতো কল করতে হয় না 
//todo: constructor parameter receive করে 
//todo: constructor method কোনো result return করে না 
//---------------------------------------------------------
const person=class{
    constructor(){
        console.log(`Hi! I am a constructor method.`);
    }
}
new person();

//---------------------------------------------------------
//? object create করা মাত্রই constructor method execute হয়ে যায়, এমনকি object create করে কোনো variable এও store করার প্রয়োজন নাই। 
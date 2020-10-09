// 
const myAge=prompt("Enter your age please!"); // Creating variable. It is goona be change with saved value


let earlyYears=2;  //the value saved to this variable will change.

earlyYears *= 10.5;

let laterYears = myAge - 2; //This value will be change later.

// Dog years accounted for by my later years
laterYears*=4;
console.log(`${earlyYears} early years -${laterYears} later years;`);


//Adding two variable
let myAgeInDogAge=earlyYears+laterYears; //early and later years result be dog years
console.log(myAgeInDogAge);
let myName=prompt("Enter your name please!").toLowerCase(); //creating all letters be change lower case.


console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogAge} years old in dog years. `);
// Creating print of Human name, dog name, human age and dog age.

//Dog age to human age;
const dogAge=prompt("Enter your dog age plaese!");
let earlyDog=2;
earlyDog*=10.5;
let laterDog=dogAge-2;
laterDog*=4;
let dogAgeInHummanAge=earlyDog+laterDog;
alert(`Dog age is ${dogAge} years old. It  is human age is ${dogAgeInHummanAge}`)

//Challange

const tortoiseAge=prompt("Please enter tortoise age!")
let firstTortoise=12;
let lastTortoise=tortoiseAge-1;
lastTortoise*=10;

let tortoiseHumanAge=(firstTortoise+lastTortoise);
alert(`Tortoise age is ${tortoiseAge} years old and human age is ${tortoiseHumanAge} years old`)





// Dog age to human age;
/* const dogAge = parseInt(prompt("Please enter dog age!"));
let earlyDog = 2; 
earlyDog *= 10.5;

let laterDog = dogAge - 2;
laterDog *= 4;

let dogAgeToHumanAge = earlyDog + laterDog;
dogAgeToHumanAge = Math.round(dogAgeToHumanAge);

alert(`Dog age is ${dogAge} years old. Its human age is ${dogAgeToHumanAge} years old.`)

// 14 -> Challange -> â€œtortoise yearsâ€ to â€œhuman yearsâ€
const turtiesAge = parseInt(prompt("Please enter turtle age!"));
let firstTurtle = 12;
let lastTurtle = turtiesAge - 1;
lastTurtle *= 10;

let turtleHumanAge = firstTurtle + lastTurtle;
alert(`Turtle age is ${turtiesAge} years old. Its human age is ${turtleHumanAge} years old.`) */
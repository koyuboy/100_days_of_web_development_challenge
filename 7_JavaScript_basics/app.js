let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

let job = {
  title: "Developer",
  place: "Turkey",
  greet(){
    console.log('Hello!' , job.title , job.place);
  }
}; //object

job.greet();

function calculateAdultAge(age) {
  return age - 18;
}
let adultAge = calculateAdultAge(23);
calculateAdultAge();
console.log(adultAge);

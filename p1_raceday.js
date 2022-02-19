let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnerAge = 20;

if (runnerAge > 18 && registeredEarly == true){
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly == true){
  console.log(`You will be racing at 9:30am. Your race number is ${raceNumber}`)
} else if (runnerAge > 18 && registeredEarly == false){
  console.log(`You will be racing at 11am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}`);
} else {
  console.log('Go see the registration desk.');
}

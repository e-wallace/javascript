/*
Eliza Wallace
February 2022
Codecademy practice 

Temperature calculator that converts from kelvin, farenheit, celsius, newton
*/

//reset this constant to get the values for any temperature
const kelvin = 293;
//temperature in kelvin

const celsius = kelvin-273;
//temperature in celsius

let farenheit = celsius*(9/5) + 32;
//temperature in farenheit
farenheit = Math.floor(farenheit);
//round down to the nearest whole number and reassign 

let newton = celsius*(33/100);
newton = Math.floor(newton);

//can display using any temperature just change the string interpolation ${} and the wording
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

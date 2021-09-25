// assignment 1

// q1
// write a function which returns array. call the function and destructure array values 
//and print the value

// let name = ["abc","efg","hij","xyz"];
// const [a, b, c, d, ...f] = name;

// function names(a) {
// console.log(name[1]);
// console.log(name[3]);
// console.log(name);

// }
// names(a);

// q2

// Make a car object with model, year, color. display all the values by destructuring
// const carData = {
//     carName : "Hiace",
//     carModel: 2019,
//     carColor: "Black"

// }
//destructuring:
// let { carName, carModel, carColor} = carData;
// console.log(`My car name is ${carName}.
//  car Model is ${carModel}.`);
 

// q3
 // use three variable name, greeting and display value using template literals
// let greet = "Hello,";
// let greeting = "Welcome";
// let name = "Fatima";
// console.log(`${greet} ${greeting} ${name}`);



//q4
// use array [1,2,3,4,5,6,7,8,9,10] 
//assign first three values in seperate variables
// and all remaining in one element as an array


// let a, b, c, rest;
// [a,b,c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a);
// console.log(b);
// console.log(c);
// [a, b, c, ...rest] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rest);


// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

// let s = prompt("Enter car Speed");

// if(s < 80){
//     console.log("Car speed is Slow");
// }

// if(s >= 80 && s < 120 ){
//         console.log("Car speed is Moderate");
// }
// if(s > 120 ){
//     console.log("Car speed is fast");
// }

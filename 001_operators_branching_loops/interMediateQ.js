// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace thdire number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

for (let i = 1; i < 101; i++) {
    (i%3==0 &&i%5==0)?console.log("FizzBuzz"):i%3==0?console.log("Fizz"):1%5==0?console.log("Buzz"):console.log(i)   
}

// Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *


var str=""
for(var i=0;i<6;i++){
    for(j=0;j<i;j++){
     str=str + " *"
    }
    str=str + "\n"
}
console.log(str)
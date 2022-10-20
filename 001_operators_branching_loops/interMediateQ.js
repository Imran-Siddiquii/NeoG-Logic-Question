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

// Write a program to take a number input from user and print multiplication table 12 times for that number.

var tableNumber=12
for (let i = 1; i <= tableNumber; i++) {
    for (let j = 1; j <=10; j++) {
        console.log("table of number"+ i +"*" + j +"=" + i*j)
    }
}

var table12Time=34;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log("table", table12Time , j, "=",table12Time * j)        
    }
}

// Write a Program to take a number input from user and find if the number is Prime or not.
let flag=true
const primeNumber=num=>{
    if(num<3){
        console.log("number should be greater than 2")
    }else{
      for (let i = 2; i < num; i++) {
        if(num%i==0){
            flag=false
            console.log("this is not a prime number")
            return flag
        }else
        {
            flag=true
            console.log("number is prime")
           return flag
        }
      } }   
      }
primeNumber(2)
// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


const weekday=day=>{
    if(day.toLowerCase()=="saturday" || day.toLowerCase()=="sunday"){
      return  day + "" +"is" + "weekend days"
    }else{
        return day +" " + "is weekdays"
    }
}
console.log(weekday("Sunday"))
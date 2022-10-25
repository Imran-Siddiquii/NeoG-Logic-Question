// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

const readline = require('readline-sync')
// let a=readline.question("Input Number 1 : ")
// let b=readline.question("Input Number 2 : ")
// const sum=(a,b)=>Number(a) + Number(b);
// console.log(sum(a,b))   


// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

// let P=readline.question("Principa amount : ")
// let T = readline.question("Time : ")
// let SI=readline.question("Simple Interest : ")
// const simpleInterest=(p,t,si)=>(p*t*si)/100
// console.log(simpleInterest(P,T,SI))

// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v
const kinetic=(m,v)=>0.5*m*v*v
console.log(kinetic(5,6))

// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

const FtoC=F=>((F-32)*5/9).toFixed(3)
console.log(FtoC(56))

const CtoF=C=>(C * 9/5) + 32
console.log(CtoF(56))

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

const Calculate=a=>{
    console.log("Area : ", a*a)
    console.log("Perimeter : ", 4*a)
    console.log("Surface Area : ", 6*a*a)
    console.log("Volume : ",a*a*a)
}
Calculate(3)




// Given the Cost Price(CP) and Selling Price(SP) of a product.Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss
let CP=readline.question("Input Cost Price : " )
let SP=readline.question("Input Selling Price : ")

const CalculatePandL=(cost,selling)=>{
    let differece=Math.abs(selling - cost);
    (selling>cost)? console.log("output : ", differece , "Profit"):console.log("Output : ", differece, "Loss")
}
CalculatePandL(CP,SP)


// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

let integer=readline.question("Enter a Positive integer : ")
const integerSum=num=>{
    let sum=0;
    for (let i = 1; i <= num; i++) {
        sum +=i
    }
    return sum 
}
console.log(integerSum(integer))

// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

const Odd=(num)=>{
    let array=[]
    for (let i = 1; i <= num*2; i++) {
        if(i%2==0){
        }else{
            array.push(i)
        }
    }
    let accending=array.sort((a,b)=>b-a)
    for (const number of accending) {
        console.log(number)
    }
}
console.log(Odd(4));

// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

let inputNumber=readline.question("Input : ")
const number=num=>{
    let sum = 0
    num.split('').forEach(element => sum +=Number(element));
    return sum;
}
console.log(number(inputNumber))

// Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

let reverseNum=readline.question("input : ")
const reverse=num=>num.split('').reverse().join('');
console.log(reverse(reverseNum))

// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// let normalNumber= readline.question("Enter a Number : ")
// let rotationNumber=readline.question("Enter the number of Rotation")

// const rotation=(normal,rotate)=>{
//     let makeArray=normal.split('')
//     let rotateArray=[]
//     console.log( makeArray.pop(rotate).rotate.push())
// }
// console.log(rotation(normalNumber,rotationNumber))

// function arrayRotate(arr, reverse) {
//     if (reverse) arr.unshift(arr.pop());
//     else arr.push(arr.shift());
//     return arr;
//   }



// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101


function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        // console.log(
        //     `${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        // );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number1 = readline.question('Enter a decimal number: ');

convertToBinary(number1);
// Follow up Question : Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal
// Footer
// Question : Given a and b, your function should return the value of ab
// Example:

// Input: power(2,3) ––> Output: 8

  const power=(num,power)=>{
    return num **power
  }
console.log(power(3,6))

// Question: Given length of a regular hexagon, your function should return area of the hexagon.
// Example:

// Input: areaOfHexagon(10) ––> Output: 259.80
 
// a= 3.3root/2 * a**2
const areaOfHexagon=num=>{
  return (3 * Math.sqrt(3))/2 * num**2
}

console.log(areaOfHexagon(10))


// Question: Given a sentence, your functions should return the number of words in the sentence.
// Example:

// Input: noOfWords(We are neoGrammers) ––> Output: 3

const countNumber=(string)=>{
    return wordCount=string.split(' ').filter((value)=>value!=='').length
}
console.log(countNumber("hello world     be in a    role"))


// Question: Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:

// Input: findMin(3,5) ––> Output: 3

// Question: 
// Input: findMin(3,5,9,1) ––> Output: 1

// Question: (Hint: Lookup rest parameters in JavaScript)
// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:

// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9

const findMin$Max=(...num)=>{
  let min=num[0];
  let max=num[0]
  for (let i = 1; i < num.length; i++) {
    if(num[i]>max){
      max=num[i]
    }
    if(num[i]<min){
      min=num[i]
    }
  }
  return {min,max}
}
console.log(findMin$Max(3,5,2,45,46,32,23))


// Question: (Hint: Lookup rest parameters in JavaScript)
// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:

// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
const typeOfTriangle=(...num)=>{
  let sum =0
  a=num[0]; b=num[1]; c=num[2]
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
   if(sum!==180){
    return console.log("addition of 3 angle must be 180")
   }else{
    (a!==b && b!==c && c!==a)?console.log("scalene"):(a===b&& b==c && c==a)?console.log('equilateral'):(a==b || b==c)?console.log("isosceles"):console.log("not an angle")
   }
}
typeOfTriangle(60, 60, 60)




// Question: Medium

// Question: Given two arrays, your function should return single merged array.
// Example:

// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// Question: Given a string and an index, your function should return the character present at that index in the string.
// Example:

// Input: charAt("neoGcamp", 4) ––> Output: c

// Question: Given two dates, your function should return which one comes before the other.
// Example:

// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021


// Given an array, your function should return the length of the array.
// Example:// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength=num=>{
  return num.length
}
console.log(arrayLength([34,23,45,231,35]));

// Question: Given an array and an item, your function should return the index at which the item is present.
// Example: // Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf=([...num],index)=>{
return num[index]
}
console.log(indexOf([3,4,2,2,4,5,2,2,1,5,45],10));

// Question: Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:

// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace=([...num],num1,num2)=>{
  let number=[]
for (let i = 0; i < num.length; i++) {
}

}
console.log(replace([1,5,3,5,6,8], 5, 10))
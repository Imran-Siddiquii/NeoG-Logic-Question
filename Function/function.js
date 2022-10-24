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
for (let i = 0; i < num.length; i++) {
  if(num[i]===num1){
    num[i]=num2
  }
}
return num;
}
console.log(replace([12,34,1,455,21,34,12,54,34,],34,55))


const replaceAll=([...num],[...num1],[...num2])=>{
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num1.length; j++) {
      for (let k = 0; k < num2.length; k++) {
        if(num1[j]==num[i]){
          num[i]=num2[0] || num2[k]
        }
      }  
    }
  }
  return num;
  }
  console.log(replaceAll([12,34,1,455,21,34,12,54,34],[34,12],[11,222]))
  //  output--> [11,222,1,455,21,222,11,54,222]

  const replaceMultiple=([...num],[...num1],[...num2])=>{
    for (let i = 0; i < num.length; i++) {
        if(num[i]==num1[0]){
          num[i]=num2[0]
        }
    }
    for (let j = 0; j < num.length; j++) {
      if(num[j]==num1[1]){
        num[j]=num2[1]
      } 
    }
    return num
  }
  console.log(replaceMultiple([12,34,1,455,21,34,12,54,34],[34,12],[11,222]))
  //  output-->  [222,11,1,455,21,11,222,54,11]


  // Question: Given two arrays, your function should return single merged array.
// Example:

// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const margeArray=([...arr],[...arr1])=>{
for (let i = 0; i < arr1.length; i++) {
  arr.push(arr1[i])
}
return arr;
}

console.log(margeArray([1,3,5],[2,4,6]))



// Question: Given a string and an index, your function should return the character present at that index in the string.
// Example:

// Input: charAt("neoGcamp", 4) ––> Output: c
const charAt=(string,num)=>{
  return string.charAt(num)
}
console.log(charAt("neoGcamp",4))


// Question: Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate=(date1,date2)=>{
  let days1=date1.slice(0,2)
  let month1=date1.slice(3,5)
  let year1=date1.slice(6)

  let days2=date2.slice(0,2)
  let month2=date2.slice(3,5)
  let year2=date2.slice(6);
// console.log(year2)
   (year1>year2)?(date2,"comes first"):(year1==year2 && month1>month2)?(date2,"comes first"):(year1===year2 && month1===month2 && date1>date2)?(date2,"comes fisrt"):(date1," date 1comes first")


  if(year1>year2){
    console.log(date2,"comes first")
  }else if(year1==year2 && month1>month2){
    console.log(date2,"comes first")
  }else if(year1===year2 && month1===month2 && date1>date2){
    console.log(date2,"comes fisrt")
  }else{
    console.log(date1," date 1comes first")
  }
}
console.log(minDate('02/05/2028', '24/09/2022'))



// Question: Footer


// Question: Advanced
// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:

// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor

let alphabet=["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const encodeString=(string,num)=>{
  let indexOfString=[];
  let encode=[]
  let indexNum;
  for (let i = 0; i < string.length; i++) {
     indexNum=alphabet.indexOf(string[i])
     indexOfString.push(indexNum+num)
  }

  for (let j = 0; j < indexOfString.length; j++) {
    encode.push(alphabet[indexOfString[j]])
  }
  return encode?.join('')
}

console.log(encodeString("neogcamp", 2))


// Question: Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
// Given a sentence, return a sentence with first letter of all words as capital.
// Example:

// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase=string=>{
 let newarray=[];
   string.split(' ').forEach(element => {
   var elements =element.charAt(0).toUpperCase() + element.slice(1)
    newarray.push(elements)
  })
  return newarray.join(' ')
}
console.log(toSentenceCase('we are neoGrammers, i am selected by neog'))

// Question: Given an array of numbers, your function should return an array in the ascending order.
// Example:

// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray=(array)=>{
return array.sort((a,b)=> b - a)
}
console.log(sortArray([100,83,32,9,45,61]))


// Question: Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:

// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen


const reverseCharactersOfWord=string=>{
  let newArray=[]
  let value;
  string.split(' ').forEach(element => {
  value = element.split('').reverse('').join('')
 newArray.push(value)
  });
  return newArray.join(" ")
}

console.log(reverseCharactersOfWord('we are neoGrammers'))

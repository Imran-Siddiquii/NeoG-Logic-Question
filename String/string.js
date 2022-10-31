// Write a program that converts the string into uppercase

const upperCase=str=>str.toUpperCase()
console.log(upperCase("this is string for upper case"))

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
    
    const appendString=(str1,str2)=>str2+str1
    console.log(appendString("Good","Morning"))

// Program that reads string and count number of characters present in the string

    const stringCount=str=>str.length;
    console.log(stringCount("this is the string length"))


// Write a program that converts string like "124" to 124

    const stringToNumber=str=>Number(str)
    console.log(stringToNumber("124"))

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

    const deleteVowel=str=>{
        const changeToArray=str.split('');
        const vowel=['a','e','i','o','u']
        if(changeToArray.length<=80){
            for (let i = 0; i < changeToArray.length; i++) {
              for (let j = 0; j < vowel.length; j++) {
                if(changeToArray[i]==vowel[j]){
                    // console.log(changeToArray.indexOf(changeToArray[i]),changeToArray[i])
                    const remove=changeToArray.splice(changeToArray.indexOf(changeToArray[i]),1)
                }
              }  
            }
        return changeToArray.join('')
        }else{
            console.log("string character should not be greater than 80 ")
        }
    }
    console.log(deleteVowel("Write a program to delete all vowels from a string. Assume string"))

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

        const checkAlphaNumeric=str=>{
            const arr=[]
            const makeAnArray=str.split('')
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < makeAnArray.length; j++) {
                    if(i==makeAnArray[j]){  
                        arr.push(makeAnArray[j])
                    }
                }
            }
            return "contain digit " + arr.join('')
        }
       console.log(checkAlphaNumeric("batman@45")) 

// A program that reads three strings and prints the longest and smallest one

        const longestAndSmallestString=str=>{
            const makeAnArray=str.split(' ');
            let max=makeAnArray[0].length
            var min=makeAnArray[0].length
            for (let i = 0; i < makeAnArray.length; i++) {
                    if(makeAnArray[i].length>max){
                    max=makeAnArray[i].length
                }
                if (makeAnArray[i].length<min) {
                    min=makeAnArray[i].length
                }
                
            }
            return {max,min}

            // try to do in short way
            //  str.split(' ').forEach(element => {
            //     console.log(element);
            //    console.log(element[0].length)
            //     if(element.length>max){
            //         max=element.length
            //     }
            //     if (element.length<min) {
            //         min=element.length
            //     }
            // });
            // return {max,min}
        }
 console.log(longestAndSmallestString("this for check the array"))

 // A program that counts number of vowels and consonants in a String?

        // const countNumberOfVowelAndConsonants=str=>{

const countNumberOfVowelAndConsonants=(str)=> {
     var totalLength=str.length
  var m = str.match(/[aeiou]/gi);
  var consonant=totalLength-m.length
  return {vowelLength:m.length,consonant};
}
console.log(countNumberOfVowelAndConsonants("ahis is the programming"))

        // }

  // Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

     


// Write a program that takes two strings and copies smaller string into bigger string

// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// For a given input string(str), write a function to print all the possible substrings.Without using substr method

// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// Write a program that masks all but last four characters of the string "5565534276455423" to '#'
const lastCharacter=str=>{
 var ne= str.slice(-4).split('');
 var arr=[]
for (let i = 0; i < ne.length; i++) {
    var replace=ne[i].replaceAll(ne[i],"#")   
    arr.push(replace)
}
return str.slice(0,-4) + arr.join('')
}
  
console.log(lastCharacter("5565534276455423"))
// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

const capitalCase=str=>str.slice(0,7).toUpperCase() + str.slice(7);
console.log(capitalCase("tic tac toe is a fun game"))
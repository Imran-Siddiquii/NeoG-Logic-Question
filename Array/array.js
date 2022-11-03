// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

// Find average of an array and display the output.
// Find maximum and minimum of an array.
const array=([...arr])=>{
    let sum=0;
    let average=0;
    let Min=arr[0]
    let Max=arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
        if(arr[i]>Max){
            Max=arr[i]
        }
        if(arr[i]<Min){
            Min=arr[i]
        }
        
    }
    average=sum/arr.length
    return {sum,Min,Max,average}
}
console.log(array([10,4,5,2,5,6,9]))

// Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term
// Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43
// Find number of constants and vowels in a string.
// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
const array1=([...arr])=>{
    //Median
    //Mode
    let index=0
    let mode;
    for (let i = 1; i < arr.length; i++) {
        debugger;
        mode=arr[index]
        
        if(arr[i]==mode){
            // mode=arr[i]
            console.log("match",arr[i])
            
        }
        index++
    }
    let sortedArray=arr.sort((a,b)=>a-b)
    return [sortedArray[4]/2,{mode}]
}

console.log(array1([10,5,4,2,5,6,9]))
// not solve


const sumOfArray=([...arr1],[...arr2])=>{
   let sum1=0;
    let sum2=0;
    for (let i = 0; i < arr1.length; i++) {
          sum1 +=arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }
    console.log("first array",arr1.join('+')+ " = " + sum1 )
    console.log("second array",arr2.join('+')+ " = " + sum2 )
    console.log("Final Output", sum1 + "+" + sum2 + " = " + Number(sum1+sum2))
}

console.log(sumOfArray([3,4,2,5,46,72,],[34,56,676,3,43,43]))


// Find number of constants and vowels in a string.

const findVowel=str=>{
    let vowels= str.match(/[aeiou]/gi).length
    consonant=str.length-vowels
    return [vowels,consonant]
}
console.log(findVowel("this is me "))
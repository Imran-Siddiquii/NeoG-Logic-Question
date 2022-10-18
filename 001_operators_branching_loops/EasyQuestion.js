// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
 const add=(num1,num2,num3,num4,num5)=>{
   const Number= num1+num2+num3+num4+num5;
   return Number
 }
 console.log(add(23,45,12,445,34))


//  Write a program to take a number input from user and determine whether the number is odd or even.

const oddEven=oddEvenNumber=>{
  oddEvenNumber<1?console.log("number should be greater than zero"):oddEvenNumber%2==0?console.log("even"):console.log("odd")
}
oddEven(12);


// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const minAndmin=(first,second)=>{
   (first>second)?console.log("first is greater"):console.log("second is greater",second)
}
minAndmin(244,54)

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const findMax=(number1,number2,number3)=>{
  var array=[number1,number2,number3]
  var maxNumber=array[0]
  for(var i=0;i<array.length;i++){
    if(array[i]>maxNumber){
        maxNumber=array[i]
    }
  }
  console.log(maxNumber)
}
findMax(8,23,17)

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const findMin=(numb1,numb2,numb3)=>{
    var minarray=[numb1,numb2,numb2]
    var minNumber=minarray[0];
    for (let i = 0; i < minarray.length; i++) {
        if(minarray[i]<minNumber){
            minNumber=minarray[i]
        } 
    }
    console.log(minNumber)
}
findMin(35,29,46)

// Write program to take a month as an input from the user and find out whether the month has 31 days or not

const days=[31,28,31,30,31,30,31,31,30,31,30,31]
const checkMonth=month=>{
return days[month-1]
}
console.log(checkMonth(12))
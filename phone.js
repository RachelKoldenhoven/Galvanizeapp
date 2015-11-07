/**
 * Created by rachel on 10/19/2015.
 */


console.log("Hello Galvanize!");


//For this challenge, we are interested in finding the phone number whose digits sum to the largest number.

  //  Write a single function that outputs the “largest” phone number in an input array (if multiple numbers are equally
  // large, return the last one). Assume that the phone numbers are strings of 10 digits separated by dashes.

    //We encourage you to complete this in Javascript, but you can choose any language.  Your program should be general
    // enough to work with any input, but here is an example of its functionality in Ruby:

//largest_phone_number(['123-456-7777', '963-481-7945', '111-222-3333'])
//#=> '963-481-7945'

//largest_phone_number(['555-555-5555','111-111-1111','555-555-5456','222-121-2121'])
//#=> '555-555-5456'

//largest_phone_number(['123-456-7899'])
//#=> '123-456-7899'





//orders array from greatest to least and logs greatest
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort(function(a,b){
    return b-a
});
console.log(numbers[0]);


//replaces dash with empty string
var sample = "1203-45";
var sample = sample.replace(/-/, "");

console.log(sample);
//finds sum of digits in string
var sum = 0;

for(i=0; i<sample.length; i++) {
    sum = sum + parseInt(sample[i]);
}

console.log(sum);

//removes dash and finds sum of digits

function bigSum(phoneNum) {
    var pSum = 0;
    phoneNum = phoneNum.replace(/-/g,"");
    console.log(phoneNum);
    for (var i = 0; i < phoneNum.length; i++) {
        pSum = pSum + parseInt(phoneNum[i]);
        }
        console.log(pSum);
    }

bigSum('123-456-7777');

//created objects that kept the number and its sum together so the number could be returned.  This
//would be difficult to sort, especially for the case of two or more numbers having the same sum.
/*
function objSum(phoneNum) {
    var pNObj = {};
    pNObj.value = phoneNum;
    var pSum = 0;
    phoneNum = phoneNum.replace(/-/g,"");
    for (var i = 0; i < phoneNum.length; i++) {
        pSum = pSum + parseInt(phoneNum[i]);
    }
    console.log(
        pSum);
    pNObj.sum = pSum;
    console.log(pNObj);
    return pNObj;
}

function largest_phone_number(phoneNumbers) {
    for(var i=0; i<phoneNumbers.length; i++) {
        objSum(phoneNumbers[i]);
    }
}


largest_phone_number(inputA);



//Instead, creating a for loop to loop over the array and an if statement to keep or discard the current number.


function Sum(phoneNum) {
    var pSum = 0;
    phoneNum = phoneNum.replace(/-/g,"");
    for (var i = 0; i < phoneNum.length; i++) {
        pSum = pSum + parseInt(phoneNum[i]);
    }
    return pSum;

}

function largest_phone_number(phoneNumbers) {
    var maxSum = 0;
    var pNumber = 0;
    for(var i=0; i<phoneNumbers.length; i++) {
        var currentPNumber = phoneNumbers[i];
        var currentSum = Sum(phoneNumbers[i]);
        if(currentSum >= maxSum) {
            maxSum = currentSum;
            pNumber = currentPNumber;
        }
    }
    console.log(maxSum);
    console.log(pNumber);
    return pNumber;
}


largest_phone_number(inputA);
largest_phone_number(inputB);

*/


var inputA = ['123-456-7777', '963-481-7945', '111-222-3333'];
var inputB = ['555-555-5555','111-111-1111','555-555-5456','222-121-2121'];

function largest_phone_number(phoneNumbers) {
    var maxSum = 0;
    var pNumber = 0;
    for(var i=0; i<phoneNumbers.length; i++) {
        var currentPNumber = phoneNumbers[i];
        var currentSum = 0;
        var pNumberEdit = phoneNumbers[i];
        pNumberEdit = pNumberEdit.replace(/-/g,"");
        for (var j = 0; j < pNumberEdit.length; j++) {
            currentSum = currentSum + parseInt(pNumberEdit[j]);
        }
        if(currentSum >= maxSum) {
            maxSum = currentSum;
            pNumber = currentPNumber;
        }
    }
    console.log(maxSum);
    console.log(pNumber);
    return pNumber;
}


largest_phone_number(inputA);
largest_phone_number(inputB);





//function phoneNum(value, sum){
    //this.value = value;
   // this.sum = sum;
   // for(i=0;i<)
//}

function fortytwo(numbers){
    var fpn = {};
    fpn.value = (numbers);
    fpn.valueMinus = fpn.value;
   // for(i=0; i<valueMinus.length; i++){
        //valueMinus[i] = "x";
   // }
    //for(i=0; i<fpn.valueMinus.length; i++){
        //fpn.sum = fpn.sum + parseInt(fpn.valueMinus[i]);

    console.log(fpn);
}
fortytwo(['555-555-5555','111-111-1111','555-555-5456','222-121-2121']);



function winner(numbers){
    var pn = {};
    for(i=0; i<numbers.length; i++){
        pn[i] = numbers.length[i];
    }
    for(j=0;j<numbers.length; j++){
        pn.value = numbers[j];
    }
    //pn.str =  pn[i].replace(/-/,"");
    console.log(pn);
    }




winner(['555-555-5555','111-111-1111','555-555-5456','222-121-2121']);

function tryAgain(numbers) {
    for(i=0; i<numbers.length; i++){
        new Object(numbers[i]);
        console.log(Object);
    }
    // use this.notation to create the parameters, then accept the array

}

tryAgain(['555-555-5555','111-111-1111','555-555-5456','222-121-2121']);


//function bigSums([phoneNums]){

//}
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function phoneTags(numbers) {
    var tags = [];
    for(i=0; i<numbers.length; i++){
        tags[i] = i++;
    }
    console.log(tags);
}

phoneTags(['555-555-5555','111-111-1111','555-555-5456','222-121-2121']);

var phoneNumbers = {}

var numOne  = {
    value: '555-555-5555',
    valueMinus: numOne.value.replace(/-/,""),
    sum: "x"
};

console.log(numOne);



















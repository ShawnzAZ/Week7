
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 50]

let firstAgeE = 0
let lastAgeE = (ages.length) -1

let ageDiff =(ages[lastAgeE] - ages[firstAgeE])

console.log ('The Difference of the value of the first element in the array from the value in the last element of the array is: ' + ageDiff)

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

console.log('I added 50 to the array and the result reflected as 47 now as expected')

// Use a loop to iterate through the array and calculate the average age.

var ageSum = 0
for (let i = 0; i < ages.length; i++) {
    ageSum = ageSum + ages[i];
        if (i === ages.length -1)  {
        console.log ('The average age is: ' + (ageSum / ages.length) )
        }
   }

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log('New names array contents: ' + names)

// Use a loop to iterate through the array and calculate the average number of letters per name.

var numLettersName = 0
for (let i = 0; i < names.length; i++) {
    numLettersName = numLettersName + names[i].length;
        if (i === names.length -1)  {
        console.log ('The average number of letters per name is: ' + numLettersName / i)
        }
}

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

var concatNames
for (let i = 0; i < names.length; i++) {
//    concatNames = concatNames.concat (names[i]);
        if (i === 0) {
            concatNames = names[i]
        } else {
        concatNames = concatNames + ' ' + names[i]
            if (i === names.length -1)  {
            console.log ('The names all concatted together are: ' + concatNames)
            }
        }
}

// How do you access the last element of any array?

console.log('I access the last element of any array by using dot notation of array.(length - 1)')

// How do you access the first element of any array?

console.log('I access the first element of any array by using dot notation of array.0')

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

var nameLengths = []
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
        if (i === names.length -1)  {
            console.log ('The names array is: ' + names )
            console.log ('The new array of name lengths is: ' + nameLengths )
        }
   }

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumLengths = 0
for (let i = 0; i < nameLengths.length; i++) {
    sumLengths = sumLengths + nameLengths[i];
        if (i === nameLengths.length -1)  {
        console.log ('The sum of the name lengths is: ' + sumLengths )
        }
   }

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

let param1
let param2
let concatNWIP

function concatN(param1, param2) {
    for (let i = 0; i < param2; i++) {
        if (i === 0) {
            concatNWIP = param1
        } else {        
        concatNWIP = concatNWIP + param1
            if (i === param2 -1)  {
            console.log (concatNWIP)
            }
        }
    }
}

concatN('Hello', 3)

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

let fName
let lName

function retFullName(fName, lName) {
    fullName = fName + " " + lName
    console.log(fullName)
    return fullName
}

retFullName ('Shawn', 'Quinn');

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var arraySum = 0
function isGreater(array) {
    for (let i = 0; i < array.length; i++) {
    arraySum = arraySum + array[i];
        if (i === array.length -1)  {
            if (arraySum > 100) {
                let isGreater = true
                console.log ('The sum of all the numbers in the array is greater than 100' )
            } else {
                let isGreater = false
                console.log ('The sum of all the numbers in the array is NOT greater than 100' )
            }
        }
    }
}

isGreater ([3, 9, 23, 64, 2, 8, 28, 93, 50])



// Write a function that takes an array of numbers and returns the average of all the elements in the array.


function avgEle(param) {
    var eleSum = 0
        for (let i = 0; i < param.length; i++) {
            eleSum = eleSum + param[i];
                if (i === param.length -1)  {
                    console.log ('The average of the Elements is: ' + (eleSum / param.length) )
                }
        }
}

avgEle ([3, 9, 23, 64, 2, 8, 28, 93, 50, 100, 25, 75, 32])


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

const compEle = (paramArray1, paramArray2) => {
    var p1EleSum = 0
        for (let i = 0; i < paramArray1.length; i++) {
            p1EleSum = p1EleSum + paramArray1[i];
                if (i === paramArray1.length -1)  {
                    p1EleAvg = (p1EleSum / paramArray1.length)
                }
        }
    var p2EleSum = 0
        for (let i = 0; i < paramArray2.length; i++) {
            p2EleSum = p2EleSum + paramArray2[i];
                if (i === paramArray2.length -1)  {
                    p2EleAvg = (p2EleSum / paramArray2.length)
                }
        }
    if (p1EleAvg > p2EleAvg) {
        console.log ('The First Array Average of the Elements is larger than the Second')
        return true
    } else {
        console.log ('The Second Array Average of the Elements is larger than the First')
        return false
    }
}

compEle([10,20,30,40,50], [6,7,8,9,10])

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// ** NO IDEA why && was passing false as true, so doing it the hard way...
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        console.log('willBuyDrink returns true')
        return true
    } else {
        console.log('willBuyDrink returns false')
        return false
    }
}

//const willBuyDrink = (isHotOutside, moneyInPocket) => {
//    if ((isHotOutside === true)) {
//        console.log('isHotOutside returns true')
//            if (moneyInPocket > 10.50) {
//                console.log('willBuyDrink returns true')
//                return true
//            } else {
//                console.log('willBuyDrink returns false, money in pocket < 10.50')
//                return false
//            }
//    } else {
//        console.log('willBuyDrink returns false, not hot out')
//        return false
//    }
//}



willBuyDrink(true, 20.00)
willBuyDrink(true, 10.00)
willBuyDrink(false, 20.00)
willBuyDrink(false, 10.00)

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// choose what radiolink to use for a model with jaded reasons to use or not to use ELRS.  if you know RC this is semi-tounge in cheek, but funny because it's true :)

var useRX
const tbsVsELRS = (isWhoop, isModelICareAbout) => {
// if it's a Whoop - always use ELRS
    if (isWhoop === true) {
        useRX = 'ELRS'
// If this is a model I care about, always use TBS
    } else if (isModelICareAbout === true) {
        useRX = 'TBS'
// Not a Whoop and not a model I care about, anything goes!
    } else {
        useRX = 'ELRS or TBS'
    }
    console.log("The RX to use is: " + useRX)
}


tbsVsELRS (true, false)     // is a whoop I don't care about
tbsVsELRS (true, true)      // is a whoop I DO care about
tbsVsELRS (false, false)    // not a Whoop, but a model i don't care about
tbsVsELRS (false, true)     // not a whoop, but I care about the model
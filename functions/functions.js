// function sayHello(greeting, name){
//     if (name == "Lewis"){
//         return `${name}, you are the chosen one!`
//     } else {
//         return `${greeting} ${name}`
//     }
// }

// console.log(sayHello("What you sayin", "Lewis"))

// var add = function(firstNumber, secondNumber){
//     return firstNumber + secondNumber
// }

// console.log("First number + second number =", add(10, 89))

// Task: 20 minutes
// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a 
// key that matches the string. Store this function in an appropriately named variable to invoke it.

// // NAMED FUNCTION
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function arraySum(nums){
//     var total = 0
//     for (var num of nums){
//         total += num
//     }
//     return total
// }

// console.log(arraySum(nums))

// // ANONYMOUS FUNCTION
// var keyMatcher = function(object, keyToMatch){
//     var objectKeys = Object.keys(object)

//     for (var key of objectKeys){
//         if (key == keyToMatch){
//             return true
//         }
//     }
//     return false
// }

// console.log(keyMatcher({name: "Lewis", age: 23}, "height"))

// // ARROW FUNCTIONS
// var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber

// console.log(multiply(5, 2765))



// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function arraySum(myNumbers){
    var total = 0
    for (var num of myNumbers){
        total += num
    }
    return total
}

console.log(arraySum(myNumbers))

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.
function evenArray(myNumbers){
    var newArray = []
    for (var num of myNumbers){
        if (num % 2 == 0){
            newArray.push(num)
        }
    }
    return newArray
}

console.log(evenArray(myNumbers))

// Part 2

var myBill = [ 
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.
function totalBill(myBill){
    billTotal = 0
    for (var meal of myBill){
        billTotal += meal.price
    }
    return billTotal
}
console.log(totalBill(myBill))

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.
function customerMeal(myBill, name){
    var newArray = []
    for (var meal of myBill){
        if (meal.customer == name){
            newArray.push(meal)
        }
    }
    return newArray
}

console.log(customerMeal(myBill, "Rita"))

// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.
function individualCustomerTotal(name){
    var customerTotal = 0
    wholeCustomerMeal = customerMeal(myBill, name)
    for (var meal of wholeCustomerMeal){
        customerTotal += meal.price
    }
    return customerTotal
}

console.log(individualCustomerTotal("Sally"))

// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.
function avergaePrice(myBill){
    var avg = 0
    var billTotal = totalBill(myBill)
    var totalItems = myBill.length
    avg = billTotal / totalItems
    return avg
}

console.log(avergaePrice(myBill))

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  },
  lazeAbout: (hours) => {
      bodyBuilder.strength = bodyBuilder.strength / hours;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.
console.log(bodyBuilder.strength)

// 3.b. Use the workOut function to update the bodyBuilder's strenth.
bodyBuilder.workOut(50)
console.log(bodyBuilder.strength)

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a 
// number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.
bodyBuilder.lazeAbout(4)
console.log(bodyBuilder.strength)
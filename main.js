/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater than " + num2 + ".";
    } else if (num1 < num2) {
        return num2 + " is greater than " + num1 + ".";
    } else {
        return "You entered the same number twice, dummy."
    }
}

document.getElementById('button1').addEventListener("click", function() {
    document.getElementById('q1').innerHTML = minimum(document.getElementById("findNum1").value,
        document.getElementById("findNum2").value);
});

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1 + " is the smallest number.";
    } else if (num2 <= num1 && num2 <= num3) {
        return num2 + " is the smallest number.";
    } else if (num3 <= num1 && num3 <= num2) {
        return num3 + " is the smallest number.";
    } else {
        return "I'm not sure what's happening.";
    }
};

document.getElementById('button2').addEventListener("click", function() {
    document.getElementById('q2').innerHTML = minimum3(document.getElementById("num1").value,
        document.getElementById("num2").value, document.getElementById("num3").value);
});

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

var arrayofNumbers= [1,2,3,4]
function sum(arrayofNumbers) {
    var total = 0;
    for (i=0; i<arrayofNumbers.length; i++) {
      total += arrayofNumbers[i];
    }
    return total + " is the total.";
};
    document.getElementById('q3').innerHTML = sum(arrayofNumbers);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var arrayofNumbers= [1,2,3,4]
function multiply(arrayofNumbers) {
    var total = 1;
    for (i=0; i<arrayofNumbers.length; i++) {
      total *= arrayofNumbers[i];
    }
    return total + " is the total.";
};
    document.getElementById('q4').innerHTML = multiply(arrayofNumbers);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(words) {
    for (i = 0; i < words.length; i++) {
        if (words[i].length < 6) {
            words.splice(i, 1);
            i--;
        }
    }
    return words;
};
document.getElementById('q5').innerHTML = filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

var btn6 = document.getElementById('button6')
btn6.addEventListener('click', getFahrenheit);

document.getElementById('button6').addEventListener('click', getFahrenheit);

function getFahrenheit(celsius) {
    var celsius = prompt("Enter a temperature in Celsius.")
    celsius *= (9 / 5);
    celsius += 32;
    fahrenheit = celsius.toFixed(0);
    window.alert("The temperature is " + fahrenheit + " deg. Fahrenheit.")
};

// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
//
// var choice = prompt("Please choose to convert from Fahrenheit to Celsius by entering 'F to C' or Celsius to Fahrenheit by entering 'C to F'");
//
var btn7 = document.getElementById('button7')
btn7.addEventListener('click', getUserChoice);

function getUserChoice(choice) {
    choice = prompt("Choose whether you'd like to convert from Fahrenheit to Celsius 'F to C' or from Celsius to Fahrenheit 'C to F'.");

    if (choice === "C to F") {
        var input = prompt("Please enter the degree Celsius.")
        input = parseFloat(input);
        input *= (9 / 5);
        input += 32;
        fahrenheit = input.toFixed(0);
        window.alert("The temperature is " + fahrenheit + " deg. Fahrenheit.");
    } else if (choice === "F to C") {
        var input = prompt("Please enter the degree Fahrenheit.")
        input = parseFloat(input);
        input -= 32;
        input /= (9 / 5);
        celsius = input.toFixed(0);
        window.alert("The temperature is " + celsius + " deg. Celsius.");
    } else {
        window.alert("You didn't enter C to F or F to C. Try again.")
        getUserChoice(choice);
    }
};

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B")
            count += 1;
    }
    return count;
}

document.getElementById('q8').innerHTML = "There are " + countBs("BBBBBBBoyyyy") + " B's in your string.";


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!

// could not get website to work, sorry. :(

// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

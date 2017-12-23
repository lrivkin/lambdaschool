//1. print the number 5 to the console
console.log("5");
//2. Print your name to the console
console.log("My name is Leah.");
//3. Store your age as a variable called "myAge"
var myAge = 21;
//4. Print to the console how old you will be in 5 years
console.log(myAge + 5);
//5. Store your favorite food as a variable called "myFavoriteFood"
var myFavoriteFood = "pasta <br>";
//6. Publish your favorite food to `index.html` using `document.write()`
document.write("my favorite food: " + myFavoriteFood);
//7. Print the remainder of 14 / 3 to the console
console.log(14%3);
//8. Print the remainder of 829 / 13 to the console
console.log(829%13);
//9. Create a for loop that counts from 0 to 130 by 3s
document.write("<br>counting from 0 to 130 by 3s: ");
for(var i=0;i<=130;i=i+3) {
    document.write(i + " ");
}
//10. Create a for loop that counts from 3 to 17 by 2s
document.write("<br><br>counting from 3 to 17 by 2s: ");
for(i=3; i<=17; i+=2) {
    document.write(i+ " ");
}
//11. Create a for loop that counts from 100 to 3 by -1
document.write("<br><br>counting from 100 to 3 by -1: ");
for (var i = 100; i >=3; i--) {
    document.write(i+ " ");
}
//12. Create a for loop that counts from 1 to 100 by 1s
document.write("<br><br>counting from 1 to 100 by 1s: ");
for (var i = 1; i <= 100; i++) {
    document.write(i+ " ");
}
//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5
document.write("<br><br>counting from 1 to 100 by 1s with fizz: <br>");
for (var i = 1; i <= 100; i++) {
    if ((i%5) ===0) {
        document.write("fizz ");
    } else {
        document.write(i+ " ");
    }
}
//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3
document.write("<br><br>counting from 1 to 100 by 1s with buzz: <br>");
for (var i = 1; i <= 100; i++) {
    if ((i%3) ===0) {
        document.write("buzz ");
    } else {
        document.write(i+ " ");
    }
}
//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15
document.write("<br><br>counting from 1 to 100 by 1s with fizzbuzz: <br>");
for (var i = 1; i <= 100; i++) {
    if ((i%15) ===0) {
        document.write("fizzbuzz ");
    } else {
        document.write(i+ " ");
    }
}
//EXTRA CREDIT: Fizzbuzz

/*
The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag.
The text of the programming assignment is as follows:
"Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”."
Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp
*/
document.write("<br><br> fizzbuzz challenge: <br>");
for (var i=1; i<=100; i++) {
    var a = i%3;
    var b = i%5;
    
    if (a ===0) {
        document.write("Fizz")
    } 
    if(b ===0) {
        document.write("Buzz");
    }
    if(a>0 && b>0) {
        document.write(i);
    }    
    document.write(" ");
}
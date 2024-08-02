
//ARRAY STRUCTURE 

//ESTABLISH ARRAY
let fruits=["apple","strawberry","cherry","oranges"];
let one=1;

//LOG TO CONSOLE
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[one]);

//UPDATING ARRAY DATA
fruits[1]="blueberries";
console.log(fruits); 


//ADDING NEW ITEMS TO AN ARRAY

//ESTABLISH ARRAY
let officeCharacters=["Michael", "Jim", "Dwight"];
console.log(officeCharacters);

//ADD TO TAIL-- .PUSH -- ADDS ELEMENT TO END OF ARRAY
officeCharacters.push("Andy");
console.log(officeCharacters);

//REMOVE FROM END-- .POP -- REMOVES ELEMENT FROM END OF ARRAY 
officeCharacters.pop();
console.log(officeCharacters);

//ADD TO HEAD -- .UNSHIFT -- ADDS A NEW ELEMENT TO HEAD OF ARRAY
officeCharacters.unshift("Dwight");
console.log(officeCharacters);

//REMOVES FROM HEAD -- .SHIFT -- REMOVES THE FIRST ELEMENT FROM ARRAY 
officeCharacters.shift();
console.log(officeCharacters);

//COUNTING ELEMENTS IN ARRAYS-- .LENGTH WILL COUNT ELEMENTS
officeCharacters.length;
console.log(officeCharacters.length);





//BEGIN ARRAY PRACTICE EXERCISES

//ACCESS ARRAY ELEMENTS
//TO-DO: DEFINE AN ARRAY OF ELEMENTS
let items_arr=["apple","banana", "cherry","date","elderberry"];

//TO-DO ACCESS SPECIFIC ELEMENTS
let firstItem= items_arr[0]
let thirdItem= items_arr[2]
let lastItem= items_arr[4]

//OUTPUT THE RESULTS
console.log("Items: " + items_arr)
console.log("First Item: " + firstItem);
console.log("Thrid Item: " + thirdItem);
console.log("Last Item: " + lastItem);






//LIST OF FAVORITE MOVIES
//TO-DO: DEFINE AN ARRAY OF FAVORITE MOVIES
let favMovies_arr=["Sopranos","Across the Universe","Bull Durham"];

//OUTPUT EACH MOVIE INDIVIDUALLY
console.log(favMovies_arr[0]);
console.log(favMovies_arr[1]);
console.log(favMovies_arr[2]);




//SUM OF ARRAY ELEMENTS
//TO-DO DEFINE AN ARRAY OF NUMBERS
let numbers_arr=[2,5,8,6,3];

//TO-DO CALCULATE SUM OF THE NUMBERS
let sum= numbers_arr[0] + numbers_arr[1] + numbers_arr[2] + numbers_arr[3] + numbers_arr[4];

//OUTPUT THE RESULT
console.log(sum);





//CONCATE STRINGS IN AN ARRAY
//TO-DO: DEFINE AN ARRAY OF STRTINGS
let strings_arr=["this is ", "an array ", "of strings"];

//TO-DO: CONCATENATE THE STRINGS
let stringConcat= strings_arr[0] + strings_arr[1] + strings_arr[2];

//OUTPUT THE RESULT
console.log(stringConcat);





//UPDATE ARRAY ELEMENTS
//TO-DO: DEFINE AN ARRAY OF ITEMS
let colors_arr= ["red", "blue", "green", "yellow", "purple"];

//TO-DO: UPDATE-- GREEN TO CYAN -- PURPLE TO ORANGE
colors_arr[2]="cyan";
colors_arr[4]="orange";

//OUTPUT THE RESULTS
console.log(colors_arr)



//RANDOM NUMBERS
//let rng= math.floor (Math.random() * math.floor(colors_arr.length));





//CONDITIONAL STATEMENTS

//DECLARE VARIABLE
let boo=true;

//LOG TO CONSOLE
console.log(boo);

// IS EQUAL TO ==
console.log(4 == 5); //OUTPUT FALSE
console.log(4 == 2+2 ); //OUTPUT TRUE

// IS STRICTLY EQUAL TO ===
let boo2="4";
let boo3 = 4;
let boo4 = "four"

console.log(boo2 == boo3); //OUTPUT TRUE
console.log(boo2 === boo3); //OUTPUT FALSE

//NOT EQUAL TO  !=
console.log(boo3 != boo4); //OUTPUT TRUE

//GREATER THAN >
console.log(boo3> 6); //OUTPUT FALSE

//LESS THAN <
console.log(boo3 <6); //OUTPUT TRUE

//LESS THAN OR EQUAL TO <=
console.log(boo3 <= 4); //OUTPUT TRUE

//LESS THAN OR EQUAL TO <=
console.log(boo3 >= 4); //OUTPUT FALSE


//LOGICAL OPERATORS

//AND -- &&
console.log("double ampersans:" + (4 == 4 && 3 == 2));

//OR -- ||
console.log("double pipes: " + (4==3 || 3==3));

//NOT -- !
console.log(!true);


//IF ELSE STATEMENTS 

//IF STATEMENTS
if (boo3 == 4) {
console.log("Hey I'm the number 4");
};


// IF AND ELSE
let isHungry = false;

if(isHungry){
    console.log("Let's eat! I want chicken nuggies!");
} // END IF 

else {
    console.log("Let's keep coding! Yay!")
};//END ELSE STATEMENT

// IF, ELSE IF, ELSE
let howHungry = 50;
let amHungry=true;

if(amHungry === true && howHungry >= 75){
    console.log("I'm so hungry I could eat a horse.");
}//END IF

else if(amHungry=== true && howHungry>=25){
    console.log("I'll just eat a snack!");
}//END ELSE IF

else{
    console.log("I'm not hungry.")
}; //END ELSE STATMENT


//SWITCH STATEMENT

switch(amHungry == true){

    case howHungry >= 75:
        console.log("I'm so hungry I could eat a horse.");
    break;

    case howHungry >= 25:
        console.log("I'll just eat a snack!");
    break;

    case howHungry >=25:
        console.log("I'm not hungry.");
    break;

    default: 
    console.log("I'm not hungry.");
};//END SWITCH 


//CONDITIONAL PRACTICE PROBLEMS

//FAVORITE FRUIT CHECKER
// DEFINE AN ARRY OF FAV FRUITS
let fruit_arr=["grape", "pear", "pineapple"];

//DEFINE A VARIABLE FOR THE FRUIT TO CHECK
let checkFruit = "grape"

// CHECK IF THE FRUIT IS IN THE ARRAY AND OUTPUT THE RESULT
if (checkFruit === fruit_arr[0]) {
    console.log(`${checkFruit} is on list `);
}

if (checkFruit === fruit_arr[1]) {
    console.log(`${checkFruit} is on list `);
}

if (checkFruit === fruit_arr[2]) {
    console.log(`${checkFruit} is on list `);
}

else {
    console.log(`${checkFruit} is NOT on list `);

};




if (checkFruit === fruit_arr[0]) {
    console.log(`${checkFruit} is on list `);
}
else if (checkFruit === fruit_arr[1]) {
    console.log(`${checkFruit} is on list `);
}
else if (checkFruit === fruit_arr[2]) {
    console.log(`${checkFruit} is on list `);
}
else{
    console.log(`${checkFruit} is NOT on list `);
};





//GRADE CATEGORIZER
//DEFINE A VARIABLE FOR THE GRADE
let gradeNum= 75;
let gradeLetter;

//CATEGORIZE THE GRADE
if(gradeNum>=90){
    gradeLetter="A"
};

if(gradeNum>=80){
    gradeLetter="B"
}; 

if(gradeNum>=70){
    gradeLetter="C"
}
if(gradeNum>=60){
    gradeLetter="D"
}
if(gradeNum<60){
    gradeLetter="F"
};

//OUTPUT THE RESULT
console.log(`${gradeLetter}`); 

debugger
//DAY OF THE WEEK CHECKER
//DEFINE AN ARRY OF DAYS OF THE WEEK
let boop_arr = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
//DEFINE A VARIABLE FOR THE DAY TO CHECK
let boopDay="Thurs";
let weekday=false; 
//CHECK IF THE DAY IS A WEEKDAY OR WEEKEND

//I want to know if thursday is a weekday or weekend...
//how do I know - mon tue wed thur fri is not a weeked 
//if boopDay === mon tue wed thru fri - weekday is true
//if boopday === sat or sun weekday is false


if(boopDay===boop_arr[0]){
    weekday=true
}
else if(boopDay==boop_arr[1]) {
    weekday=true; 
}
else if (boopDay==boop_arr[2]){
    weekday=true;
}
else if (boopDay==boop_arr[3]){
    weekday=true;
}
else if (boopDay==boop_arr[4]){
    weekday=true;
}

else if(boopDay== boop_arr[5]){
    weekday=false; 
}
else if (boopDay==boop_arr[6]){
    weekday=false;
}
else{
    console.log("That is not a day.")
}

if(weekday===true){
    console.log("It is a weekday! ")
}

else{
    console.log("It is a weekend!! ")
}





//TEMPERATURE CHECKER
//DEFINE A VARIABLE FOR THE TEMPERATURE
//CATEGORIZE THE TEMPERATURE
//OUTPUT THE RESULT


//NUMBER SIGN CHECKER
//DEFINE A VARIABLE FOR THE NUMBER
//CHECK THE SIGN OF THE NUMBER
//OUTPUT THE RESULT




//QUIZ QUESTIONS

//JavaScript Quiz
 
//Question 1:
//Write a line of code that declares an array called fruits with the elements "apple", "banana", and "cherry". 
//Then, log the second element of the array to the console.
 let fruits_arr=["apple", "banana", "cherry"];
 console.log(fruits_arr[1]);
 
 
//Question 2:
//Write a line of code that declares an array called numbers with the elements 1, 2, 3, 4, and 5. 
//Then, create a variable sum that is the sum of the first and third elements of the array, and log sum to the console.
let num_arr=[1, 2, 3, 4, 5];
let numSum= num_arr[0] + num_arr[2];
console.log(numSum)
 
 
//Question 3:
//Write a line of code that declares an array called languages with the elements "JavaScript", "Python", and "Java". 
//Then, change the second element of the array to "Ruby" and log the entire array to the console.
let languages_arr=["JavaScript", "Python", "Java"];
languages_arr[1]="Ruby";
console.log(languages_arr);

 
//Question 4:
//Write a line of code that declares a variable age and assigns it the value 20. 
//Then, use an if-else statement to check if age is greater than or equal to 18, and log "Eligible to vote" if true, and "Not eligible to vote" otherwise.
let age=20;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote")
};

//Question 5:
//Write a line of code that declares an array called cities with the elements "New York", "Los Angeles", and "Chicago". 
//Then, create a variable lastCity that holds the last element of the array, and log lastCity to the console.
let cities_arr=["New York", "Los Angeles", "Chicago"];
let lastCity=cities_arr[2];
console.log(lastCity);

//Question 6:
//Write a line of code that declares a variable x and assigns it the value 7. 
//Then, use an if-else statement to check if x is greater than 5 or less than 10, and log "In range" if true, and "Out of range" otherwise.
let x=7;
if(x>5 || x<10){
    console.log("In range");
}
else{
    console.log("Out of range");
};
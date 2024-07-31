
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




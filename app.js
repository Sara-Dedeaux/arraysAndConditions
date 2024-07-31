
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
console.log(favMovies_arr[0], favMovies_arr[1], favMovies_arr[2]);

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








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





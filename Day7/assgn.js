//Que1-Write a JavaScript program to list the properties of a JavaScript object. Sample
// object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output:
// name,sclass,rollno
//sol:-

//var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
//console.log(Object.keys(student).toString());

//Que2-Write a JavaScript program to delete the rollno property from the following object.
//Also print the object before or after deleting the property.
//sol:-

// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// console.log("Before deleting: ", student);
// delete student.rollno;
// console.log("After deleting: ", student);

//Que3-Write a JavaScript program to get the length of a JavaScript object. Sample object :
//sol:-

// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// console.log(Object.keys(student).length);

//Que4-Write a JavaScript program to display the reading status (i.e. display book name,
//author name and reading status) of the following books. 
//sol:-

// var library = [{ author: 'BillGates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'WalterIsaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The FinalBook of The Hunger Games', readingStatus: false }];
// console.log(Object.keys(library[0]).toString());
// for (let i = 0; i < library.length; i++) {
//     console.log(Object.values(library[i]).toString());
// }

//Que5-Write a JavaScript program to get the volume of a Cylinder with four decimal places
// using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the
// height of the cylinder. Try To Attempt : Difficult Level Increased

//Que6-Write a JavaScript program to sort an array of JavaScript objects. Sample Object :
var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
//function sorting( library){
console.log(library.sort(library.libraryID));
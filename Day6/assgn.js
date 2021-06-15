// Que-1-Write a JavaScript function to check whether an `input` is an array or not
//sol:-
function is_array(arr) {
    return Array.isArray(arr);
}
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

//Que-2-Write a JavaScript function to clone an array
//sol:-

function array_Clone(arr) {
    return arr.slice(0);
}
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

//Que-3-Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(arr, n) {
    if (n == null) {
        return arr[0];
    }
    // if (n < 0) {
    //     return [];
    // }
    return arr.slice(0, n);

}
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

//Que-4-Write a simple JavaScript program to join all elements of the following array into a string.
//sol:-
myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(" "));
// console.log(myColor.join());
// console.log(myColor.join("+"));

//Que-5- Write a JavaScript program to find the most frequent item of an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 0;
var element;
var max_count = 1;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            count++;
        if (max_count < count) {
            max_count = count;
            element = arr1[i];
        }
    }
    count = 0;
}
console.log(element, "(", max_count, "times)");
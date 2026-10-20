// Q1. Write a function to reverse a string without using reverse().

function reverseString(str){
    let reversed ="";

    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i];
    }
    return reversed;
}
console.log(reverseString("Hello"))
console.log(reverseString("world"))



// function reverseString(str) {
//     let result = "";
//     let i = str.length - 1;

//     while (i >= 0) {
//         result += str[i];
//         i--;
//     }

//     return result;
// }

// console.log(reverseString("hello")); // "olleh"

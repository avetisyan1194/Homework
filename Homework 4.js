//Ex 1 	Given three numbers a, b (a ≤ b) and step. 
           //Create an array of evenly spaced elements starting from a to b spaced by step.
let a = +prompt("please enter the first element of the array");
let b = +prompt("please enter the last element of the array");
let x = +prompt("please enter the  difference between 2 elements");
let arr = [a]

    for (let i = a; i <= b ; i+x){
            arr.push(arr[i])
    }
    console.log (arr)

//Ex 2 	Given a string and a symbol. 
          //Find the number of occurrences of the symbol in the string.
function countString(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) == b) {
            count += 1;
        }
    }
    return count;
}
let a = prompt("please enter the text");
let b = prompt("please enter the finding element");
countString(a,b)

//Ex 3 Given a string. Check whether the string is palindrome or not.
let a = prompt("please enter the text");
let b =( [a.split("")]).reverse();
let c = b.join();
    alert (a == String.c ? true : false)

//Ex 4 Given an array of numbers. Find the maximum element in array.

let array = prompt("please enter the array");
console.log(Math.max(...array))

//Ex 5 Given an array. Create the array which elements are products between two neighbours.
let arr = prompt("please enter the array");
let newArr = [];
 for(let i=0 ; i<(arr.length-1) ;i++ ){
newArr.push((arr[i])*(arr[i+1]))
  }
console.log(newArr)

//Ex 6  Given a string and symbols. Change first symbol by the second one in the string. 
let a = prompt("please enter the text");
let b = prompt("please enter the changing symbol");
let c = prompt("please enter symbol to change");
    for( ; a.includes(b) ; a.replace(b,c) ){
        a=a.replace(b,c) }
alert(a)

//Ex 7 	Print the following number pattern:1 12 123 1234 12345 1234 123 12 1

let a = "12345"
    console.log(a.charAt(0))
    console.log(a.charAt(0)+a.charAt(1))
    console.log(a.charAt(0)+a.charAt(1)+a.charAt(2))
    console.log(a.charAt(0)+a.charAt(1)+a.charAt(2)+a.charAt(3))
    console.log(a.charAt(0)+a.charAt(1)+a.charAt(2)+a.charAt(3)+a.charAt(4))
    console.log(a.charAt(0)+a.charAt(1)+a.charAt(2)+a.charAt(3))
    console.log(a.charAt(0)+a.charAt(1)+a.charAt(2))
    console.log(a.charAt(0)+a.charAt(1))
    console.log(a.charAt(0))



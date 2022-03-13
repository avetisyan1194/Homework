//Ex 1
let a = +prompt("");
let b = 0;

    while (a) {
    b += a % 10;
    a = Math.floor(a / 10);
    }
    console.log(b);

//Ex 2
let a = +prompt("Number 1")
let b = +prompt("Number 2")
let c = +prompt("Number 3")

    if (a+b<c || a+c<b || b+c<a){ 
 	    alert ( "yes")
	    } else 
        alert ("no")

//Ex 3
// let a=+prompt ("nuber 1")
// let i= 0
//     while (a !== 0){
//     a = (a-a % 10 )/ 10
//     if (a===9){i++}
//     }
//     alert (i)

//Ex 4
let a = prompt("Enter a value");
let z = a;
let reverse = 0;
    while(z > 0){
    let digit = z % 10;
    reverse = (reverse * 10) + digit;
    z = Math.floor(z / 10);
    }
    alert(reverse);

//Ex 5
let a = +prompt("Number 1")
let b = Math.floor(Math.log2 (a))
	if ( Math.pow (2,b)===a){
	alert ("true") 
	} else {
	alert ("false")
	}  
 
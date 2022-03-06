//EX1_a 
let a = +prompt("Number 1")
let b = +prompt("Number 2")

	if (a <= b){
		alert ("false") 
		} else if (a > b){
		alert (a+b)
		} 
//EX1_b
let a = +prompt("Number 1")
let b = +prompt("Number 2")

	if (a <= b){
		alert ("false") 
		} else if (a > b){
		alert (a-b)
		}  
//EX1_c
let a = +prompt("Number 1")
let b = +prompt("Number 2")

	if (a <= b){
		alert ("false") 
		} else if (a > b){
		alert (a*b)
		}  
//EX1_d
let a = +prompt("Number 1")
let b = +prompt("Number 2")

	if (a <= b){
		alert ("false") 
		} else if (a > b){
		alert (a/b)
		}    
//EX1_e
let a = +prompt("Number 1")
let b = +prompt("Number 2")

	if (a <= b){
		alert ("false") 
		} else if (a > b){
		alert (a%b)
		} 

//EX2   
let a = prompt ( "Print your name" )
let b = prompt ( "Print your age" )

    alert ( "My name is " + a + ", I am " + b + ".")     

//EX3  
let a = +prompt ("PLS enter the number" )
alert (((a % 10) %2)===1) ? "True" : "False"

//EX4
let a = +prompt("Number 1")

	if (a < 0){
		alert ("yes") 
		} else if (a >= 0){
		alert ("no")
		}

//EX5
let a = +prompt("Number 1")
let b = +prompt("Number 2")

 if ((a % b)===0){ 
 	alert ("1")
	 } else if ((b % a)===0){ 
 	alert ("1")
  }else if ((a % b)!==0){ 
 	alert ("0")
	 }else if ((b % a)!==0){ 
 	alert ("0")
  }

  //EX6
  let a = +prompt ("please enter number of the mounth")
    if (a===1){ 
 	alert ("January")
	 } else if (a===2){ 
 	alert ("February")
	 } else if (a===3){ 
 	alert ("March")
	 } else if (a===4){ 
 	alert ("April")
	 } else if (a===5){ 
 	alert ("May")
	 } else if (a===6){ 
 	alert ("June")
	 } else if (a===7){ 
 	alert ("July")
	 } else if (a===8){ 
 	alert ("August")
	 } else if (a===9){ 
 	alert ("September")
	 } else if (a===10){ 
 	alert ("October")
	 } else if (a===11){ 
 	alert ("November")
	 } else if (a===12){ 
 	alert ("December")
	 } else 
   alert ("wrong number")

//EX7   
let a = +prompt("Number 1")
let b = +prompt("Number 2")
let c = +prompt("Number 3")

 if (a>b && a>c){ 
 	alert ( a + " is maximum")
	 } else if (b>a && b>c){ 
 	alert ( b + " is maximum")
	 } else if (c>b && c>a){ 
 	alert ( c + " is maximum")
	 }
///Ex1
let array = prompt("please enter the array");
let i = 0
let countOfElements
    for (; array[i] !== []; i++) {
    console.log(countOfElements+1)
    }
///Ex2
let array = prompt("please enter the array");
let sum = 0
    for (let i = 0; i <= length.array; i++) {
    sum = sum + array[i]
    console.log(sum)
    }
///Ex3
function createArrayPowOf3(a, b){
let result = []
    for(let i=a; i < b; i++){
        let powOf3 = false
        let j = i
        while (j>1){
            if (j%3){
                powOf3= false;
                break;
            }else {
                j/=3;
            }
            if (j === 1){
                powOf3 = true
                break;
            }
        }
        if(powOf3){
            result.push(i)
        }
        return result
    }
}
///Ex4
let num = prompt();
let str = Array.num;
let result = [str[0]];
  
for(let i=0; i<=str.length; i++)
  {
    if((str[i]%2 === 0)&&(str[i+1]%2 === 0))
     {
      result.push(str[i])
      result.push('-');
     }
    else
     {
      result.push(str[i]);
     }
  }
console.log(result);













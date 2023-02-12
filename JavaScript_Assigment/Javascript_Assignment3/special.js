const prompt = require("prompt-sync")();
const number = prompt('Enter a positive integer: ');

let a = number;
let sum = 0;
let fact = 1;

while(a>0)
{
    let temp=a%10;
    a=parseInt(a/10)
    fact=1
    for(i=1;i<=temp;i++)
    {
        fact=i*fact;
    }
    sum=sum+fact
}

console.log(sum)

if(sum == number){
    console.log(`${number} is a Special number`);
}
else {
    console.log(`${number} is not a Special number`);
}

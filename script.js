const num = 10
const numbers = []
for(let i=0;i<num;i++){
    numbers[i]=i
}
console.log(numbers)

const check = (par) => {
if(par%3==0 && par!==0) console.log(`${par} jest podzielna przez 3`)
else console.log(`${par} nie jest podzielna przez 3 lub ${par} = 0`)     
}

numbers.forEach(check)
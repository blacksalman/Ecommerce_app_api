let camp;
const num1 = 'enter number 1';
const num2 = 'enter number 2';

for(let i = 0; i <=num1 && i <=num2; i++){
    if(num1 % i ==0 && num2 % i == 0){
        camp = i;

    }
}

console.log(`camp of ${num1} and ${num2} `);
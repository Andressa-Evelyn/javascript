let num = [5,2,9,3];

console.log(num)

num[4] = 6;

console.log(num)

num.push(4);

console.log(num)



for(let c in num) {
    console.log(`A posição ${c} possui o valor ${num[c]}`)
}

let posicao = num.indexOf(9);
console.log(`A posição do 9 é ${posicao}`)
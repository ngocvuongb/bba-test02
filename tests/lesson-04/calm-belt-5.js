let array = [];
for (let i = 1; i <= 100; i++){
    for (let j = i; j <= 100; j++){
        if(((i*j) % 19 === 0) ){
                array.push({num1:i,num2:j})
        }
    }
}
let newArray = array.map(pairNum => `(${pairNum.num1}, ${pairNum.num2})`)
console.log(`Số cặp số chia hết cho 19 là: ${newArray.length},\n ${newArray.join()}`)


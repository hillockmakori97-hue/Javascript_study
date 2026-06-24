// let x = Number(prompt('Enter a random value: '))
// if (x%2==0){
//     console.log("even number")
// }else{
//     console.log('odd number')
// }

let num1 =Number(prompt('enter num 1 '))
let num2 =Number(prompt('enter num 2 '))
let num3 =Number(prompt('enter num 3 '))

if ((num1>num2) && (num1>num3)){
    console.log('num 1 is the largest')
 
}else if (num2>num3 && num2>num1){
    console.log('num 2 is the largest')

}else{
    console.log('num 3 is the largest')
}

let x = Number(prompt('Enter Age '))
let res = x>=18 ? 'eligible':'ineligible'
console.log(res)
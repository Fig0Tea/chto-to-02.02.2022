let a, b, c;
a = +prompt(" введите любое положительное число ")
b = +prompt(" введите любое положительное число ")
c = +prompt(" введите любое положительное число ")
function multiply(a, b){
    return a*b
}
let z = multiply(a, b)

function add(z, c){
    return z + c
}
alert (add(z, c))
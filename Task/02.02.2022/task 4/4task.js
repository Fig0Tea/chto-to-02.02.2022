let a = 1
let sum = 0
let n = +prompt("vvedite chislo")
let z = []
for (let i=0; i<10; i++){
    z [i] = Math.random()*10
    console.log(z[i])
    a = a * z[i]
    sum = sum + z[i]
}
alert(a)
alert(sum)

let a = 1
let z = []
for (let i=0; i<10; i++){
    z [i] = Math.random()*10
    console.log(z[i])
    a = a * z[i]
}
alert(a)

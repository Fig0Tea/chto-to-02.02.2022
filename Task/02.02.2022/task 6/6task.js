let a = 0
let z = []
for (let i=0; i<10; i++){
    z [i] = Math.random()*10
    a = a + z[i]
    console.log(z[i])
}
a = a / 10
alert(a)

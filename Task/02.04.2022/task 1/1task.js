let p, I, a, z = ""
p = +prompt(" введите любое  число ")
I = p
let InvDigits = (k) => {
    while(p>0){
        I = p
        I = I % 10
        p = p / 10
        p = Math.trunc(k)
        z = z + I
    }

};
a = InvDigits(p)
alert(a)
console.log(p)
console.log(z)
console.log(I)

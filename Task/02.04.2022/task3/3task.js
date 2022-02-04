let k, d, z = "", a
k = prompt(" введите любое  число ")
d = prompt(" введите любое  число ")
d1 = prompt(" введите любое  число ")
let AddRighyDigits = (k, d) => {
        z = d + k
        return z
    };
a = AddRighyDigits(k, d)
alert(a)
alert(AddRighyDigits(k, d1))
let k, d, z = "", a
k = prompt(" введите любое  число ")
d = prompt(" введите любое  число ")
d1 = prompt(" введите любое  число ")
let AddRighyDigits = (k, d) => {
        z = k + d
        return z
    };
a = AddRighyDigits(k, d)
alert(a)
alert(AddRighyDigits(k, d1))
let a, b, c, d, e;
    a = prompt(" введите любое положительное число ")
    b = prompt(" введите любое положительное число ")
    c = prompt(" введите любое положительное число ")
    d = prompt(" введите любое положительное число ")
    e = prompt(" введите любое положительное число ")
        function solver(a, b, c, d, e){
            return a**2+5*b*c+d/3+e;
            if ((a == undefined) || (b == undefined) || (c == undefined) || (d == undefined) || (e == undefined)){
                return "!error!"
            }
            
        }

        alert(solver( 40, -9, 0.5, 7, 100))
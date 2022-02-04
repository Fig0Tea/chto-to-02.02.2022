let a, b, c;
a = prompt( 'введи число' )
b = prompt( 'введи число' )
c = prompt( 'введи число' )
if ((a<b)&&(b<c)){
    console.log( 'найменьшее' )
}
if ((c<b)&&(b<a)){
    console.log( 'найменьшее' )
}
if ((a<b)&&(a<c)){
    console.log( 'найменьшее' )
}

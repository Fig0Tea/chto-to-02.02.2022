let a, b, c;
a = prompt( 'введи число' )
b = prompt( 'введи число' )
c = prompt( 'введи число' )
if ((a<b)&&(b<c)){
    console.log( 'в середине' + a )
}
if ((c<b)&&(b<a)){
  console.log( 'найменьшее' + c )
}
if ((a<b)&&(a<c)){
  console.log( 'найменьшее' + b )
}

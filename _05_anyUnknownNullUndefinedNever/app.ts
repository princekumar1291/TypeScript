let a; //set to any
a=100;
a="Prince";


let b=100;  //automatic type inference (set to number)
// b="Prince";  //Error


let c:number;  //explicit type declaration
c=100;
// c="Prince";  //Error


let d:unknown;
d=12;
d="Prince";

// d.toString(); // error because d is unknown

if(typeof d=="string"){  // type guard
  d.toUpperCase();
}




//function
function greet():void{
  console.log("Hello");
}

function add(a:number,b:number):number{
  return a+b;
}


//Null
let e=null; 

//Undefined
let f;

//Never
function abcd():never{
  while(true){
    console.log("Hello");
  }
}

abcd();
console.log("Hello");
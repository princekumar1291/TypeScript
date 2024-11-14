//function

function add(a: number, b: number): number {
    return a + b;
}

let sum=add(1, 2);
console.log(sum);


function abcd(name:string,age:number,email:string,isAdmin:boolean,cb:()=>void){
    console.log(name,age,email,isAdmin);
}
abcd("Prince",12,"a@b.com",true,()=>{
    console.log("hello");
});


function abcde(name:string,age:number,email:string,isAdmin:boolean,cb:(val:string)=>void){
    cb(name);
}
abcde("Prince",12,"a@b.com",true,(val:string)=>{
    console.log(val);
});


//optional parameter
function abcdef(name:string,age:number,email:string,gender?:boolean){
    console.log(name,age,email,gender);
}
abcdef("Prince",12,"a@b.com");



//default parameter
function abcdefg(name:string,age:number,email:string,gender:string="Not to be disclosed"){
    console.log(name,age,email,gender);
}
abcdefg("Prince",12,"a@b.com");
abcdefg("Prince",12,"a@b.com","Male");


//rest parameter
function sum2(...arr:number[]):number{
    return arr.reduce((a,b)=>a+b);
}
console.log(sum2(1,2,3,4,5));




//function overloading 

function sum3(a:number):void;
function sum3(a:number,b:number):number;

function sum3(a:number,b?:number):void|number{
    if(b){
        return a+b;
    }
    else{
        console.log(a);
    }
}
console.log(sum3(1));
console.log(sum3(1,2));
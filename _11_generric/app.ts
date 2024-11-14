//generics
function abcd<T> (a:T,b:string,c:number){
    console.log(a,b,c);
}

function ab<T>(a:T,b:T,c:T){
    return "Prince" as T;
}


abcd<number>(12,"Prince",12);
abcd<string>("Prince","Prince",12);


function log<T>(val:T){
    console.log(val);
}
log(12);
log("Prince");



//interface
interface myType<T>{
    name:string;
    age:number;
    key:T;
}

let obj:myType<string>={
    name:"Prince",
    age:12,
    key:"Prince"
}


//generric class
class myClass<T>{
    name:T;
    constructor(name:T){
        this.name=name;
    }
}

let obj1=new myClass<string>("Prince");
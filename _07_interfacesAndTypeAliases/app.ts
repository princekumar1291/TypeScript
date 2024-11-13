//Interface 
 
interface User{
    name:string;
    age:number;
    email?: string; // Optional property 'email' of type string
}

function printUser(obj:User){
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.email);
}


printUser({name:"Prince",age:12});


//extend interface

interface Admin extends User{
    isAdmin: boolean;
}

function printAdmin(admin:Admin){
    console.log(admin.name);
    console.log(admin.age);
    console.log(admin.email);
    console.log(admin.isAdmin);
}


//two interface of the same name 

interface abcd{
    name:string;
    age:number;
    email?: string; // Optional property 'email' of type string
}

interface abcd{
    isAdmin: boolean;
}

function printAbcd(admin:abcd){  //two interface of the same name will be merged
    console.log(admin.name);
    console.log(admin.age);
    console.log(admin.email);
    console.log(admin.isAdmin);
}



//type alias

type myType=string | number | boolean;
let a:myType;
a=12;
a="Prince";
a=true;
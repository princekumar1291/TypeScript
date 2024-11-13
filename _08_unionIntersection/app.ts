let a:string|number;  //union


type User={
    name:string,
    age:number
}

type Admin=User & {
    getDetails(user:string):void;
}




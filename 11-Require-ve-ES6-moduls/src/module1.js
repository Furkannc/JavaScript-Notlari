// module.exports=function test1(){//module export edildigi için baska dosyalarda kullanilabilir
//     console.log("Test 1");
// }
// module.exports=function test2(){
//     console.log("Test 2");
// }
//bu şekilde bir tane fonksion export edilir


//iki modulu de export etmek istersek
// module.exports.test1=function test1(){
//         console.log("Test 1");
// }
// module.exports.test2=function test2(){
//     console.log("Test 2");
// }
// module.exports={
// name:"Furkan",
// test1:()=>console.log("Selam"),
// person:{
//     name:"Furkan",
//     mail:"Furkan51cosgun@gmail.com"
// }

// }

//ES6 Modulleri
export const name="Furkan";
export function test(){
    console.log("asd");
}
export class Person{
    static Test(){
        console.log("Person test");
    }
}
export const Employee={
    name:"Furkan",
    salary:4000,
}

// export default class Deneme{//varsayılan olarak direk export edilir
//     static deneme(){
//         console.log("deneme default");
//     }
// }

const denemeVal ="Deneme degeri";

export default denemeVal;
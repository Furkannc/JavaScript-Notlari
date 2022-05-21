//CommonJS Modulleri

// const module1=require("./module1")//yol yazilmadan direk modul ismi yazilirsa node modules altinda aranir


// console.log(module1);

// module1.test1();//şeklinde istenilen kullanılır
// module1.test2();//şeklinde istenilen kullanılır

// console.log(module1.name);
// module1.test1();
// console.log(module1.person.mail);

//ES6 
// import { test,Person,Employee } from "./module1"//Sadece istenen moduller alinir

// Person.Test();
// test();
// console.log(Employee.name);

// import * as module1 from "./module1";//modul 1 içindeki hersey dahil edilir
// console.log(module1);//module 1 bize obje olarak geri doner
// console.log(module1.Employee.salary);

// import Deneme from "./module1";//default olarak eklenen 
// Deneme.deneme();

import denemeVal from "./module1";
console.log(denemeVal);
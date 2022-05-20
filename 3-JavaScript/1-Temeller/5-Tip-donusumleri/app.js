let value;

//Stringe donuşturme
value=10; //şuan number veri tipi
value=String(10) //şuan string
value=String(true) //şuan string
value=String(false) //şuan string
value=String(function(){console.log(123)}) //şuan string
value=String([12,3,4,1,12]) //şuan string
value=(12).toString();// şuan string
value=(3.14).toString();// şuan string

//Sayılara(number) tipine donuşturme
//eger değer içinde sayısal değerler vars donuşturme işlemi başarılı olur
value=Number("123"); //number
value=Number(null); //number deger 0
value=Number(undefined); //number tipine çevrilemez NaN not a number 
value=Number("Hello world"); //number tipine çevrilemez NaN not a number 
value=Number(function(){console.log("asd")}); //number tipine çevrilemez NaN not a number 
value=Number([12,3,4,3]); //number tipine çevrilemez NaN not a number 
value=Number("3.14") //number veri tipine çevrilir
value=parseFloat("3.14") //number veri tipine çevrilir
value=parseInt("3") //number veri tipine çevrilir

//Otomatik çevrilme işlemleri
let a="Furkan"+19; //string ile toplama işlemlerimnde birleştirme yapılır
let b="20"+29; //string ile toplama işlemlerimnde birleştirme yapılır
let c=19+26; //number veri tipinde çıktı verir

console.log(a);
console.log(b);
console.log(c);


console.log(value);
console.log(typeof value);
//Array ve objeler içinden degerleri alan kısa yol

let number1,number2;

arr=[1,2,3,4];

//normal yontem
// number1=arr[0];
// number2=arr[1];

//destructing
//  0   ,   1   indexlere denk geldigi için=[1,2,3,4] 
//direkt olarak number1=1,number2=2 degerini almis oluyor
[number1,number2]=arr;
let [num1,num2] =arr;//şeklinde de tek satırda yapılabilir 

console.log(number1,number2);

//obje destructing
const nums={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6
}
//keyler ile eslesince otomatik olarak degerler atanmis oluyor
const {a,c,f}=nums;

console.log(a,c,f);

//keyler ile eşleşsin ama farkl değişkenlerde tutmak istiyorm derseniz
const {a:sayi1,c:sayi2,f:sayi3}=nums;
//şeklinde de yapabilirsiniz
console.log(sayi1,sayi2,sayi3);


//Function destructing

const getLangs=()=>["java","python","kotlin","c++"];//arrow func kullanılmıştır
const [lang1,lang2,lang3]=getLangs();//index mantiginda calisarak return edilen degerleri alıyor
console.log(lang1,lang2,lang3);


//obje
const person={
    name:"furkan",
    surname:"cosgun",
    salary:9000,
    showInfo:()=>console.log("Bilgiler getirildi")
}
//listelerde koşeli parentez objelerde suslu parentez kullanilir
//name degerini isim olarak,surname degerini soyisim olarak.. alcagiz
const {name:isim,surname:soyisim,salary:ucret,showInfo:bilgiAl}=person;

console.log(isim,soyisim,ucret);
bilgiAl();

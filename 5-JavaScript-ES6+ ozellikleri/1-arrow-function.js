//Normal function

const merhaba=function(){
    console.log("merahaba");
}
merhaba();

//arrow function
const merhaba2=()=>{
    console.log("Merhaba");
}
merhaba2();

//parametre alcaksa
const merhaba3=(isim)=>{
    console.log("Merhaba",isim);
}
merhaba3("Furkan");

//sadece 1parametre alcaksa
const merhaba4=isim=>{
    console.log("merhaba",isim);
}
merhaba4("Ali");

//sadece 1 parametre alıp 1 satır işlem yapılcaksa
const merhaba5=isim=>console.log("merhaba",isim);
merhaba5("Ahmet")

//birden cok parametre alip tek satir kod yazilcaksa
const merhaba6=(isim,yas)=>console.log("merhaba",isim,"yaşiniz",yas);

//birden cok parametre alcaksa
const topla=(x,y)=>{
    return x+y;
}
console.log(topla(4));

//tek bir parametre alcaksa 
const cube1=x=>{
    return x*x*x;
}
console.log(cube1(4));

//tek bir parametre alıp sadece return yapcaksa
const cube2=x=>x*x*x;

console.log(cube2(19));
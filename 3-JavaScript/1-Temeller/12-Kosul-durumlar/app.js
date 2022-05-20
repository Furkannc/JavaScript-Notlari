//Karşılaştırma oparetorleri
// == eşitmi
// === Değerler ve tipler yanı mı
// != eşit değilmi
// !== değerler ve tipler farklı mı
// > buyukse
// < kucukse
// >= buyuk veya eşit se
// <= kucuk veya eşit se

console.log(2==2); //true
console.log("js"=="java"); //false
console.log(2=="2"); //true
console.log(2==="2"); //false
console.log(2>4); //false
console.log(2>4); //true
console.log(2!=4); //true
console.log(4!=4); //false
console.log(4>=2); //true
console.log(4>=4); //true
console.log(2>=4); //false

//Mantıksal bağlaçlar

//Not !
console.log(!(2==2));//false
console.log(!(2!=2));//true

//and &&
console.log((2==2) && ("ahmet"=="ahmet"));//eğer her ikiside dogruysa True biri bile yanlış ise flase

//Or ||
console.log((2==2) || ("ahmet"=="mehmet")); //birtanesi bile dogru ise True doner

//if
const error=true;

if(error){ //error==true anlamına gelir 
    console.log("error true");
}
else{
    console.log("if calismadi else calisdi");
}


const user="admin";

if(user=="admin"){
    console.log("Admin kullanicisi giris yapti");
}else if(user=="admin2"){
    console.log("Admin2 kullanicisi giris yapti");
}else{
    console.log("Kullanicii bulunamadi");
}


const islem=1;
if(islem==1){
    console.log("islem 1 ");
}else if(islem>=2){
    console.log("islem 2 den buyuk veya esitse");
}else if(islem<=0){
    console.log("islem 0 dan kucuk ve esitse");
}else{
    console.log("İslem sayi ile yapılmadıysa")
}

//Ternary
const sayi=1;

sayi==1 ? console.log("sayi 1") : console.log("sayi 1 değil");

console.log(sayi==1 ? "sayi 1 " : "sayi 1 den farkli");

if(sayi==1)
console.log("if tek satir ise susulu paranterz olmada yazilabilir")
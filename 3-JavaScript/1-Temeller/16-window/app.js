// //Alert
// alert("merhaba");

// const cvp=confirm("Emin misiniz"); //confirm true ve false sonuc doner
// if(cvp==true){
//     console.log("Cevabiniz evet oldu");
// }else{
//     console.log("Cevabiniz hayir oldu");
// }

// const cvp=prompt("2 + 2= ?"); //alert uzerinden input alma
// if(cvp=="4"){
//     console.log("Doğru");
// }
// else{
//     console.log("Yanlis");
// }
// console.log(cvp);

let value;
value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.port;
value=window.location.href;

// if(confirm("Sayfa yenilensin mi?"))
//     window.location.reload();//sayfayı yeniler
// else
//     console.log("Sayfa yenilenmedi");

value=window.outerHeight;//ekran pixel uzunlugu koşeler dahil
value=window.outerWidth;//ekran pixel genişligi koşeler dahil
value=window.innerHeight;//ekran pixel uzunlugu koşelr dahil değil
value=window.innerWidth;//ekran pixel genişligi koşelr dahil değil
value=window.scrollX;//x eksenindeki scrollbarın konumu
value=window.scrollY;//y eksenindeki scrollbarın konumu
console.log(value);
//window object
// console.log(document);//html kodlarını consola verir

let value; 
value=document.all.length;//elemet sayısı
value=document.all;//elemetleri verir

//for(let i=0;i<document.all.length-1;i++)
    //console.log(document.all[i]);//html collection donderir

const collections=Array.from(document.all);
collections.forEach(function(collection){
    // console.log(collection); //html collecton 
});

value=document.head;//head elemtini 
value=document.body;//body elementini
value=document.location;//sayfa url bilgilerini
value=document.location.hostname;//hostnami
value=document.location.port;//portu
value=document.URL;//urli
value=document.characterSet;//karakter dizisini
value=document.scripts;//scriptleri
value=document.scripts.length;//kac scipt icerdigi
value=document.scripts[0];//0.indexteki sciprt ozellini
value=document.links;//a etiketlerini collectionu
value=document.links[0];//0.indxteki link collectionu
value=document.links[0].getAttribute("class");//a etiketinin classın
value=document.links[0].className;//a etiketinin classını
value=document.links[0].classList;//a etiketinin classını liste halinde verir
value=document.links[0].getAttribute("href");//a etiketinin href ozelligini
value=document.forms;//formları veirr
value=document.forms.length;//formların sayısnı veirr
value=document.forms[0];//0.indexteki formu
value=document.forms["form"];//name e gore formu getirme
value=document.forms["form"].id;//name e gore id alma
value=document.forms["form"].getAttribute("id");//name e gore id alma
value=document.forms[0].name;//indexe gore name etiketi alma
value=document.forms[0].method;//formun metod tipini alma




console.log(value);
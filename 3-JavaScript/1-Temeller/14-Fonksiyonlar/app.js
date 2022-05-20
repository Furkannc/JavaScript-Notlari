//fonksiyon tanimlama
//function fonkisim(parametre){}  oluşturma
function selamVer(){
    console.log("Selam");
}
selamVer(); //fonksiyon cagirma

function selamVer2(name){
    console.log(`selam ${name}`);
}

selamVer2("Furkan");

selamVer2(); //eğer parametre isteyip gondermezek undefind olarak kabul edilir

function selamVerIleri(name){
    if(name===undefined )
        name="insan"
    
    console.log(`Selam ${name}`);

}
selamVerIleri();
selamVerIleri("ahmet");

//Return işlemi
function square(x){
    return x*x;//returndan sonra herhangi bi işlem gerçekleşmez
}

function cube(x){
    return x*x*x;
}

let a=square(2);//2nin karesini a değişkenine attık

console.log(a); //4

let b=cube(a);//a dan gelen değeri küpünü bulmak için fonksyona attık

console.log(b); //44

const merhaba=function(){console.log("Merhaba")}//fonksiyonu değişkene eşitleme
const merhaba2=function(name){console.log("Merhaba "+name)}//fonksiyonu değişkene eşitleme
merhaba();
merhaba2("ali");


//IIFE Tanımlandıgı yerde çalışan fonksiyonlar

(function(name){
    console.log("Merhaba "+name)
})("Ekrem");

const DataBase={
    host:"LocalHost", 
    add:function(parametre){console.log(parametre+" Eklendi")},
    get:function(){console.log("Listeleme başarılı")},
    delete:function(id){console.log("id:"+id+" silindi")},
    update:function(id){console.log("id:"+id+" Guncellendi")},
}

console.log(DataBase.host);
DataBase.add("hasan");
DataBase.get();
DataBase.delete(12);
DataBase.update(10);
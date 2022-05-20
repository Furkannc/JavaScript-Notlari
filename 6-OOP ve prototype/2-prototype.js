//ES6 öncesi
// JavaScript prototipleri
// JavaScript nesneleri özelliklerini ve metotlarını prototiplerinden alır.

// JavaScript literal veya new Object() ile oluşturulduğunda özellik ve metotlarını Object.prototype isimli prototipten alır.

// new Date() ile nesne oluşturulduğunda özellik ve metotlarını Date.prototype isimli prototipten alır.

// Tüm nesneler prototipini Object.prototype isimli prototipten alır.

// JavaScript nesneleri (Array, RegExp, Function, …) özellik ve metotlarını Object.prototype isimli prototipten alır.

// Prototip oluşturma
// Nesne prototipi oluşturmanın en kolay yolu nesne kurucu fonksiyonunu kullanmaktır.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);

// Oluşturulan prototipten yeni nesne oluşturmak için new anahtar kelimesi kullanılır.

// Nesneye özellik ekleme
// Bir nesneye yeni özellik eklemek kolaydır.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
furkan.gozRengi = "Siyah";
console.log(furkan.gozRengi);   // Siyah
console.log(mehmet.gozRengi);  // ???

// Özellik sadece furkanisimli nesneye eklenecektir.

// Nesneye metot ekleme
// Bir nesneye yeni metot eklemek de kolaydır.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
furkan.adiSoyadi = function (){
  return this.adi + " " + this.soyAdi;
};
console.log(furkan.adiSoyadi());   // furkan
//console.log(mehmet.adiSoyadi());  // undefined

// Metot sadece furkan isimli nesneye eklenecektir.

// Prototipe özellik ekleme
// Bir nesneye kolayca özellik eklendiği gibi prototipe eklenemez.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
Kisi.gozRengi = "Siyah";
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
console.log(mehmet.gozRengi);  // undefined
console.log(furkan.gozRengi);   // undefined

// Prototip özellikleri nesne kurucusuna eklenebilir.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
    this.gozRengi = "Siyah";
}
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
console.log(mehmet.gozRengi);  // Siyah
console.log(furkan.gozRengi);   // Siyah

// Prototipe metot ekleme
// Bir nesneye kolayca metot eklendiği gibi prototipe eklenemez.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
Kisi.adiSoyadi = function() { return this.adi + " " + this.soyAdi; };
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
//console.log(mehmet.adiSoyadi());  // undefined
//console.log(furkan.adiSoyadi());   // undefined

// Prototip metotları nesne kurucusuna eklenebilir.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
    this.adiSoyadi = function() {
      console.log( this.adi + " " + this.soyAdi);
  }
}
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
mehmet.adiSoyadi; // Mehmet han
furkan.adiSoyadi;   // furkan cosgun

// Nesne protipini kullanma
// JavaScript prototype özelliği ile nesne kurucu prototipine yeni özellik eklenebilir.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
Kisi.prototype.gozRengi = "Siyah";
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
console.log(mehmet.gozRengi);  // Siyah
console.log(furkan.gozRengi);   // Siyah


// JavaScript prototype özelliği ile nesne kurucu prototipine yeni metot eklenebilir.


function Kisi(a, s, y) {
    this.adi = a;
    this.soyAdi = s;
    this.yas = y;
}
Kisi.prototype.adiSoyadi = function() { return this.adi + " " + this.soyAdi; };
var mehmet = new Kisi("Mehmet", "han", 45);
var furkan= new Kisi("furkan", "cosgun", 75);
console.log(mehmet.adiSoyadi());  // Mehmet han
console.log(furkan.adiSoyadi());   // furkan cosgun

// Tüm JavaScript nesneleri prototype özelliğine sahiptir.
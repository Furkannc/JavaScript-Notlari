let value;

const numbers=[10,20,30,40,50];
// const numbers2=new Array(1,2,3,4,5,6,7,8); //iki şekilde de oluşturulabilir

const langs=["java","python","swift","js"];

const a=["merhaba",22,null,undefined,3.14];

value=numbers.length; //kaç elemanlı oldugunu verir
//index
value=numbers[0]; //ilk elemanını verir 
value=numbers[2]; //2. elemanını verir 
value=numbers[numbers.length-1]; //son elemanını verir 

//değiştirme
numbers[2]=99; //2.indexteki eleman(30) 99 oldu 

//index of
value=numbers.indexOf(50); //50 olan değer hangi indexte onu verir

//push metodu
numbers.push(1000);//dizinin sonuna 1000 ekler
numbers.unshift(1);//dizinin başına 1 ekler

//değer atma
numbers.pop();//arrayın sonundki elemanı çıkarır
numbers.shift();//arrayın başındaki elemanı çıkarır

//belirli index aralıgını atma
numbers.splice(0,3);//0 ile 3.index arasını atar 3 kabul edilmez

//listeyi ters çevirme
numbers.reverse();

//sıralama
numbers.sort();//ilk rakamına gore sıralar kuckten buyuge dogru
numbers.sort(function(x,y){return x-y;});//sayı buyuklugune gore kuckten buyuge dogru sıralar
numbers.sort(function(x,y){return y-x;});//sayı buyuklugune gore buyukten kucuge dogru sıralar







console.log(value);
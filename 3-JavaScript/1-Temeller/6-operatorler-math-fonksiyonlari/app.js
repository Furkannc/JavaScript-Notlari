let value;

const num1=10;
const num2=20;

console.log(num1+num2);//toplama
console.log(num1-num2);//çıkarma
console.log(num1*num2);//çarpma
console.log(num1/num2);//bolme
console.log(num1%num2);//Kalan

value=num1+num2;
value=num1-num2;
value=num1/num2;
value=num1*num2;
value=num1%num2;
//şeklinde de kullanılabilir

value=Math.PI; //pi sayısını verir
value=Math.E; //E sayısını verir (doğal algoritmanın kat sayısı)
value=Math.round(2.6);//yuvarlama işlemi en yakın sayıya yuavrlar
value=Math.ceil(3.2);//yuvarlama işlemi bir yukarıdaki int a yuvarlar
value=Math.floor(3.9);//yuvarlama işlemi bir aşağıdaki int a yuvarlar
value=Math.sqrt(16);//Karekok alma /out 4
value=Math.abs(-16);//Mutlak değer alma
value=Math.pow(8,3);//Ust alma /8in 3.kuvveti 
value=Math.max(31,12313,31,433,8,3);//değerler arasında en yuksek sayıyı veriri
value=Math.min(8,3213313,13423,131,3);//değerler arasında en düşük sayıyı veriri
value=Math.random();//0 ile 1 arasında random sayı uretir 0 dahil 1 dahil değil
value=Math.random() * 20; //0 ile 20 arasında sayı uretir
value=Math.random() * 20 + 1; //1 ile 20 arasında sayı uretir




console.log(value);
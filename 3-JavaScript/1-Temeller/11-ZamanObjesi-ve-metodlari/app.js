let value;

const now=new Date();//şuanki zamanı verir
// console.log(now);

const date1=new Date("12-17-2002 06:15:00");
const date2=new Date("December 17 2002");
const date3=new Date("12/17/2002");

value=date1;
value=date1.getMonth();//gecerli yılın ayını verir
value=date1.getDate();//gecerli gunu sayı ile verir
value=date1.getDay();//gecerli gunu haftanın hangi gunu oldugunu verir
value=date1.getHours();//gecerli saati verir
value=date1.getMinutes();//gecerli dakikayı verir
value=date1.getSeconds();//gecerli saniyeyi verir
value=date1.getMilliseconds();//gecerli milisaniyeyi verir

//tarihi duzenlemek için
date1.setMonth(4);
date1.setDate(15);
date1.setFullYear(2022);
date1.setHours(11);
date1.setMinutes(56);
date1.setSeconds(00);
// 15 Mayıs 2022 11:56:00
value=date1;


console.log(value);
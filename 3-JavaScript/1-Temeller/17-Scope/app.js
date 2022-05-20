//Scrope kavramı

//global scope /herhangi bir fonksiyon ve dongu durumunda olmayan alandır
function abc(){
    //function scope
}
if(1==1){
    //block scope
}


var value=10;
let value1=10;
const value2=10;
console.log(value,value1,value2);

function fun(){
    //fonksiyon içinde tanımlanan değişkenler fonksiyona özgü olur
    var value=50;
    let value1=30;
    const value2=90;
    console.log(value2)
}

if(true){
    var a=10;//eğer block içinde var değişkeni tanımlandıysa dişarıdan erişilebilir
    //aynı adla varsa da değerini değiştirir
    
    let b=10;
    const c=10;
    //let ve const ile tanımlanan değişkenlere dışarıdan erişemeyiz
  
}
console.log(a,b,c);
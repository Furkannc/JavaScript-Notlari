//While Döngüleri

let i=0;

while(i<10){//i 10 dan küçük olana kadar
    console.log(i)
    i++;//i yi kesinlşkle artırmalıyız aksi takdirde sonsuz dögüyen girer
}

i=10;
while(i>0){
    console.log(i);
    i--;
}
console.clear();
i=0;


//Break ve contine
//break: döngüyü durdur
//coninue: dongunun direk en başına gider alt satırlar çalışmaz
while(i<10){
    console.log(i);
    if(i==5)//eğer i 5 olursa döngü durur
        break;
    i++;
}
console.clear();
i=0;

while(i<10){

    i++;
    
    if(i==3 || i==5)
        continue;//3 ve 5 konsola yazılmaz
    console.log(i);
}

console.clear();
i=0;
//Do while döngüsü
//while dongusunden tek farkı koşul saglanmasa bile 1 defa çalışır
do{
    console.log(i);
    i++;
}while(i<10);


//For dongusu
const langs=["python","java","js","dart","go","kotlin"];
i=0;

for(i=0;i<langs.length;i++){
    console.log(langs[i]);
}
console.clear();




//foreach kullanım
//her bir eleman içinde tek tek gezer
langs.forEach(function(lang){
    console.log(lang);
    
});

//indexi de almak istersek
langs.forEach(function(lang,index){
    console.log(lang+"\t"+index);
    
});
console.clear();


//Map kullanımı
const users=[
    {name:"furkan",age:19},
    {name:"ali",age:32},
    {name:"ayse",age:40}
]

const names=users.map(function(user){//users liste içindeki objelere erişerek onların istenilen 
                                    //parametrseini tek tek alır ve kendisine atar;
                                    // ['furkan', 'ali', 'ayse']
    return user.name;
});
console.log(names);

//bu seferde yaslari alinir
const ages=users.map(function(user){return user.age;});
console.log(ages);//[19, 32, 40]


//For in döngüsü
const user={name:"Furkan",age:19}

for(let i in user){
    console.log(i+" : "+user[i]);
    //i bize name ve age keyini verir
    //i bize Furkan ve 19 valuesini verir
}
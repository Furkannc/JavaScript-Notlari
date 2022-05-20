// //Mapler /Key-Value

// let myMap=new Map(); //oluşturma

// console.log(myMap);

// const key1="Furkan";
// const key2={a:10,b:20};
// const key3=()=>2;

// //Set() /ekleme
// myMap.set(key1,"String deger");
// myMap.set(key2,"objet literal");
// myMap.set(key3,"function");

// //Get /alma
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// //map boyutu 
// console.log(myMap.size);

const cities=new Map();
cities.set("Ankara",5);
cities.set("Istanbul",15);
cities.set("Izmir",4);

//Foreach
cities.forEach(function(value,key){
    console.log(key,value);
});

//For of

for(let i of cities)//şeklinde yapılırsa degerler liste olarak gelir
    console.log(i);

for(let [key,value] of cities)//key ve value ayrı almak için bu şekilde kullanılmalıdır
    console.log(key,value);

//Map keys
for(let key of cities.keys())//keys fonksiyonu bize diziye benzeyen liste doner
    console.log(key);

//Map values
for(let value of cities.values())//values fonksiyonu bize diziye benzeyen liste doner
    console.log(value);

//Arraylerden map olusturma
const array=[["key1","value1"],["key2","value2"]];
const newMap=new Map(array);
console.log(newMap);

//Maplerden array olusturma
const cities2=new Map();
cities2.set("Ankara",5);
cities2.set("Istanbul",15);
cities2.set("Izmir",4);
//[["ankara",5]["istanbul",15]["izmir",4]]
const arr=Array.from(cities2);
console.warn(arr);





//Setler - Kümeler /bir deger en fazla 1defa taşır

const mySet=new Set();
mySet.add(100);
mySet.add(100);//aynı degeri tekrardan ekelemz
mySet.add(3.14);
mySet.add("Furkan");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2=new Set([100,100,3.13,"Furkan"]);//iki türlü de deger eklenebilir


// console.log(mySet);
// console.log(mySet2);

//Set kaç elemeanlı size()
console.log(mySet.size);

//delete metodu
mySet.delete("Furkan");//deger varsa siler yoksa hata vermez

console.log(mySet);

//Has metodu /varmı yokmu

console.log(mySet.has(100));
console.log(mySet.has(101));

//For each
mySet.forEach(function(val){
console.log(val);
});

//For of dongusu

for(let val of mySet)
    console.log(val);


//Set lerden  array olusturma
const arr=Array.from(mySet);
console.log(arr);
//spread opreatoru
const langs=["java","c++","python","kotlin"];

console.log(langs);

//ayrı ayrı yazılsın istenirse bu şekilde yazılcakti
console.log(langs[0],langs[1],langs[2],langs[3]);

//spread operatoru ile
console.log(...langs);

//listeleri birleştirme
//normalde bu şekilde yapılırken
const langs2=["javaScipt","c#",langs[0],langs[1],langs[2],langs[3]];
console.log(langs2);

//spread operatoru ile
const langs3=["javaScipt","c#",...langs];
console.log(langs3);

const numbers=[1,2,3,4,5,6,7,8,9];

//destructingde bu şekilde indexde gore atılabiliyordu
const [a,b]=numbers;
console.log(a,b);

//kalan degerleri de farkl bi değişkene atılmak istenirse
const [s1,s2,...numbers2]=numbers;
console.log(numbers2);

//fonksiyonlarda kullanım
const addNums=(x,y,z)=>console.log(x+y+z);

const nums=[100,200,300];

addNums(nums[0],nums[1],nums[2]);//normalde bu şekilde indexe gore atmamız gerekiyordu

//spread operatoru
addNums(...nums);
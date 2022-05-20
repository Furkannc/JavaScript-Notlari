let value;

const firstName="Furkan";
const lastName="cosgun";

const langs="java,python,flutter";

value=firstName+" "+lastName;

value="furkan";

value +=" cosgun"; //value=value+" cosgun"

value=firstName.length;//string uzunlgunu verir

value=firstName.concat(" ",lastName); //firstname + " " +...

value =firstName.toLowerCase();//karakterlerin hepsi kucuk olur
value =firstName.toUpperCase();//karakterlerin hepsi buyuk olur

value=firstName[0]; //0.index te hangi karakter varsa onu verir/ F
value=firstName[2]; //2.index te hangi karakter varsa onu verir/ r

value=firstName[firstName.length-1]; //stringin herzamanki son karakterini verir

value=firstName.indexOf("u"); //u karakteri hangi indexte onu veriri /1
//Küçük buyuk harfe duyarılıdır eger yoksa -1 donderir

value=firstName.charAt(0);//ilk harfini verir
value=firstName.charAt(firstName.length-1);//son harfini verir

value=langs.slice(",");//virgule gore parçalar ve dizi/array halinde verir

value=langs.replace("flutter","JavaSript");//flutteri kaldırır onun yerine JavaScript ekler

value=langs.includes("java");//eğer verilen değer değişkende varsa true yoksa false doner /true
value=langs.includes("html");//eğer verilen değer değişkende varsa true yoksa false doner /false


console.log(value);
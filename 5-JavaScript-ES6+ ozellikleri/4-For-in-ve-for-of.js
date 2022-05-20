const person={
    name:"furkan",
    age:19,
    salary:9000
}

const langs=["flutter","java","kotlin","javaScipt"];

const name="furkan";

//For in döngüsü

//Obje uzerinde gezinme
for(let prop in person)
    console.log(prop,person[prop]);//prop key uzerinde gezinir daha
                            //sonra biz bu keyi persondan deger almak için kullanabiliriz
//Array uzerinde gezinme
for(let index in langs)
    console.log(index,langs[index]);
    //index ve index uzerindeki degeri alabiliriz

//String uzerinde gezinme
for(let i in name)
    console.log(i,name[i]);


//For of dongusu
//Arraya benzer objeler uzerinde gezinebilriiz

//objeler uzerinde gezinme
// for(let i of person)
//     console.log(i);

//Array uzerinde gezinme
for(let i of langs) //listelerden direk deger almak istersek for of kullanabailriiz
    console.log(i);

//Stringler uzerinde gezinme
//Stringlerden direk degerleri almak istersek stringler uzerinde kullanabikriiz
for(let i of name)
    console.log(i);






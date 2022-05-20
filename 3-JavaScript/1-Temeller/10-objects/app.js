let value;

const programmer={
    name:"Furkan",
    lastName:"Cosgun",
    age:19,
    langs:["Python","Flutter","JavaScript"],

    addres:{
        city:"Nevsehir",
        district:"Merkez"
    },

    work:function(){
        console.log("Programci calisiyor");
    }
}

value=programmer;//genel olarak goruntuleme yapar objeyi
value=programmer.name;//adını veriri
value=programmer["name"];//diğer yolla ad alma

value=programmer.langs//dilleri verir
value=programmer.addres.city//şehrini verir
programmer.work();//fonksyon çalışır

const programmers=[//obje listeli oluşturma
    {name:"Furkan",age:19},
    {name:"Hakan",age:29}
]
value=programmers;
value=programmers[0];
value=programmers[0].name;

console.log(value);
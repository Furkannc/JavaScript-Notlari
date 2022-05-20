//ES6 öncesi

function Employee(){//yapıcı fonk. -Constructor
    this.name="Furkan";
}
//bu şekilde tureycek butun objelerin name ozelligi furkan olur
const emp1=new Employee();
console.log(emp1);


function Employee2(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

    //obje içine fonksiyon eklme
    this.showInfos=()=>console.log(this.name,this.age,this.salary);
    //this anahtar kelimesi bu fonksiyonu gosterir

    console.log(this);//oluşan objeyi yazdırır 
}

const emp2=new Employee2("furkan",19,3000);
emp2.showInfos();
console.log(emp2);





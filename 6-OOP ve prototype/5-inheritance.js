class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim: "+this.name+" yas:"+this.age);
    }
}

class Employee extends Person{//extend kelimesi person sınıfından miras almamızı saglar
    constructor(name,age,salary){
        super(name,age);//super kelimesi miras aldıgımız sınıfın yapıcı metodunu miras aldıgımzı anlamına gelir
        this.salary=salary;
    }
    showInfos(){//eger uzerine aynı isimde fonksiyon yazılcaksa herhangi bir ovveride işlemine gerek yoktur
                //aynı adla varsa kendi fonksiyonunu kullanmaya devam edecektir
        console.log("isim:"+this.name+" yas:"+this.age+" maas:"+this.salary);
    }
    raiseSalary(amount){//extra metod
        this.salary+=amount;
    }
}

const emp=new Employee("Furkan",19,4000);
emp.raiseSalary(500);
console.log(emp);
emp.showInfos();
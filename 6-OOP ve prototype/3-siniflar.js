//ES6 öncesi

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employee.prototype.showInfo=function(){
//     console.log("İsim: "+this.name+" Yas: "+this.age+" Salary: "+this.salary);
// }
// const emp=new Employee("Furkan",19,3000);
// console.log(emp);


//ES6 Sonrası
class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos=()=>console.log("İsim: "+this.name+" Yas: "+this.age+" Salary: "+this.salary);
    //showInfos(){console.log("İsim: "+this.name+" Yas: "+this.age+" Salary: "+this.salary);}
}
const emp=new Employee("Furkan",19,3000);
emp.showInfos();
console.log(emp);






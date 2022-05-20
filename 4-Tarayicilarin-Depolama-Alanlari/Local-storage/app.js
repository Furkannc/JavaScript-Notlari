// //Local storage /Key - value ile degerler tutulur
// //butun degerler kayit edildkten sonra stringe cevrilir
// //session ile ayni sekilde calisir

// //setItem
// localStorage.setItem("kullanici","Furkan");

// //getItem
// // const value=localStorage.getItem("kullanici");
// // console.log(value);

// //clear local storage
// localStorage.clear();

// //local storage veri varmi yokmu
// if(localStorage.getItem("kullanici")===null){
//     console.log("Kullanici verisi yok");
// }
// else{
//     console.log("Kullanici var");
//     console.log(localStorage.getItem("kullanici"));
// }

// //local storage array yazma
// // const todos=["todo1","todo2","todo3"];
// // localStorage.setItem("todo",todos);
// //yukaridaki gibi eklendiinde deger string olarak eklenir

// const todos=["todo1","todo2","todo3"];
// localStorage.setItem("todo",JSON.stringify(todos));//array halinde kaydedilir

// console.log(localStorage.getItem("todo"));//yapildiginda tekrar bize string doner

// const value=JSON.parse(localStorage.getItem("todo"));//json parse islemi ile stringi array halinde parcalariz
// console.log(value);




const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;//deger inputtan alınır

    let todos;//todos listesi  olusturulur


    if(localStorage.getItem("todos")===null)//eger herangi bir todos yoksa
        todos=[];//todos listesi bos olarak kabul edilir

    else//eger todos varsa
        todos=JSON.parse(localStorage.getItem("todos"));//todos listesine localstoragden gelen degerler eklenir 


    todos.push(value);//daha sonra biz de kendi degerimizi icine ekleriz

    localStorage.setItem("todos",JSON.stringify(todos));//zaten ayni keyde deger olunca guncelleycek kendisini ve degerlerimiz kaydedilecek

    
    e.preventDefault();//submit edildiginde sayfa tekrar yuklenmesin istiyrouz
}





const filterInput=document.getElementById("filter");
const todoForm=document.getElementById("todo-form");
//Event yakalama
filterInput.onfocus=function(){console.log("naber");} 

filterInput.addEventListener("focus",function(e){
    console.log(e);//eventi
    console.log(e.type);//event tipini
    console.log(e.target);//event konumunu
    console.log(e.target.placeholder);//konum degerlerini
    console.log(e.target.classname);//konum class adini
});


todoForm.addEventListener("submit",function(e){
   console.log(e); 
    e.preventDefault();//submit islemi kapatildi
});

function submitForm(e){//bu sekilde de kullanilanilir
    console.log(e);
    e.preventDefault();
}








console.log(filterInput);
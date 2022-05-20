//klavye eventlari

///keypress //sadece harf ve sayılar
// document.addEventListener("keypress",run);

// function run(e){
//     console.log("naber");
//     console.log(e.which);//tusun ascii tablosundaki degerini verir
//     console.log(e.key);//hangi tus olduunu verir
// }

//keydown 
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.key);
// }


//keyup
// document.addEventListener("keyup",run);
// function run(e){
//     console.log(e.key);
// }


const header=document.querySelector(".card-header");
const todo=document.getElementById("todo");

todo.addEventListener("keyup",changeText);

//Evenettan input icndeki yaziyi e.target.value diyerek alabilirz
function changeText(e){
    header.textContent=e.target.value; //card-header basligi her seferinde degisir
    console.log(e.target.value);
}











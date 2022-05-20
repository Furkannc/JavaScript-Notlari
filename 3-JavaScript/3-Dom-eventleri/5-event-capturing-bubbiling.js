//Event bubbiling

// document.querySelector(".container").addEventListener("click",function(e){
// console.log("Div container");});


// document.querySelector(".card.row").addEventListener("click",function(e){
// console.log("Card Row");});


// document.querySelectorAll(".card-body")[1].addEventListener("click",function(e){
// console.log("Card body");});

//en sondaki eventa basilsa dahi hepsi tetiklenecek



//Event capturing / Delegation

const cardBody=document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);

function run(e){
    if(e.target.className==="fa fa-remove")
        console.log("Silme");
    else if(e.target.id==="filter")
        console.log("filtreleme islemi");
    else if(e.target.id==="clear-todos")
        console.log("clear todos");
    else
        console.log(e.target);
}










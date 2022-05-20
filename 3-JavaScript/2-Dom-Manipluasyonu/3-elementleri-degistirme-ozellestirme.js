const element=document.querySelector("#clear-todos");//clear-todos idli element secildi(button)
//element ozellikleri
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);//sadece yazı bolumleeri alınır
console.log(element.innerHTML);//html etiketleri dahil herşey alınr
console.log(element.href);
console.log(element.style);//elementin css ozellikleri listelenir
console.clear();


//Style ve element ozelliklerini değiştirme
element.className="btn btn-primary";//buton tipi değişir
element.style.color="#000";//buton text rengi değişir
element.style.margin="1rem";
element.href="https://google.com";
element.target="_blank";
element.textContent="Degistirildi";
// element.textContent="<spna>Silin</span>"; kullanılmaz
element.innerHTML="<span style='color:black'> Silin </span>";//şeklinde html kodu eklenebilir




//////////////////////////////////////////////////////////////////////////
const elements=document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color="red";
    el.style.backgroundColor="black";
    el.style.border="3px white solid";
});



////////////////////////////////////////////////////////////////////////
let element2=document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(1)");//1.li
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelector("li:nth-child(4)");//4.li
element2=document.querySelectorAll("li:nth-child(odd)");//tek sayılı li ler
element2=document.querySelectorAll("li:nth-child(even)");//cift sayılı li ler

element2.forEach(function(el){
    el.style.backgroundColor="cyan";
    el.style.border="3px solid white";
});

console.log(element2);


//console.log(element);
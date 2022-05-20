//session storage -Key ve value ile tutulur
//oturum kapandiginda veriler gider
//buttonlar
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//inputlar
const addKey=document.querySelector("#addkey");
const addValue=document.querySelector("#addvalue");

const deleteKey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItems);


function addItem(e){
    sessionStorage.setItem(addKey.value,addValue.value);//session ekleme
    //eger ayni keyden varsa deger guncellenir
}

function delItem(e){
    sessionStorage.removeItem(deleteKey.value);//sessiondan key ile silme
}

function clearItems(e){
    sessionStorage.clear();//sessionu temizleme
}


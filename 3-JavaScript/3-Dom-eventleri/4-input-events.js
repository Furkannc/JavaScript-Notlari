const filter=document.querySelector("#filter");

//focus  //inputa odaklanildiginda
filter.addEventListener("focus",run);

//blur //odaktan cikildiginda
filter.addEventListener("blur",run);

//Paste //yapistirma oldugunda
filter.addEventListener("paste",run);

//Copy //kopyalama islemi yapildiginda
filter.addEventListener("copy",run);

//cut //kesme islemi oldugunda
filter.addEventListener("cut",run);

//select //herhangi bir secme islemi oldugunda
filter.addEventListener("select",run);


function run(e){
    console.log(e.type);
}


//Sayfa yuklenikten sonra calisir
document.addEventListener("DOMContentLoaded",load);
function load(e){
    console.log("Sayfa yuklendi");
}
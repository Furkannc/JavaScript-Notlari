const form=document.querySelector("#film-form");
const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clear=document.querySelector("#clear-films");
//Ui objesini başlatma

const ui=new Ui();
//Storage objesi
const storage=new Storage();
//Tum eventleri yukleme

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",()=>{
    let films=storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
  
    if(title==="" || director==="" || url==="")
    {
        ui.displayMessages("Tüm alanları doldurunuz..!","danger")
    }
    else{
        //Yeni film oluştu
        const newFilm=new Film(title,director,url);
        ui.addFilmToUi(newFilm);//Arayüze film ekleme
        storage.addFilmToStorage(newFilm);//Film ekleme
        ui.displayMessages("Film başarıyla eklendi..!","success");
    }
    ui.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        //aynı tr içindeki diger tdlere erişmek ve title degerini almak
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.deleteFilmFromUi(e.target);
        ui.displayMessages("Silme işlemi başarılı","warning");
    }
}

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUi();
        storage.clearAllFilmsFromStorage();
    }
}
class Ui{
    addFilmToUi(newFilm){
        const filmList=document.getElementById("films");
        //Önceki verinin uzerine yazmak için += kullanmamız gerekiyor
        filmList.innerHTML +=`
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>`;
    }
    clearInput(element1,element2,element3){
        element1.value="";
        element2.value="";
        element3.value="";
    }

    displayMessages(message,type){
//         <div class="alert alert-danger" role="alert">
//   This is a danger alert—check it out!
// </div>
        const cardBody=document.querySelectorAll(".card-body")[0];
        const alert=document.createElement("div");
        alert.className=`alert alert-${type}`;
        alert.textContent=message;
        cardBody.appendChild(alert);
        setTimeout(()=>alert.remove(),1000);
    }

    loadAllFilms(films){//sayfa açıldıgında filmler yuklenir
        films.forEach(film => {
            this.addFilmToUi(film);
        });
    }

    deleteFilmFromUi(elemet){
        //paren element ile bir ust elemente gidebiliriz
        elemet.parentElement.parentElement.remove();
    }

    clearAllFilmsFromUi(){
        const filmList=document.getElementById("films");//filmleri tutan tbody secilir
        // filmList.innerHTML=""; Yöntem 1
        while(filmList.firstElementChild !== null){//child oldugu surece
            filmList.firstElementChild.remove();
        }
    }
}
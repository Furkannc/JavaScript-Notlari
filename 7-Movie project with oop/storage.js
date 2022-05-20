class Storage{
    addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();
        films.push(newFilm);//arraylere objeler atılır
        /*
[
    {title:"filmad",directo:"yonetmen",url:"rsim url"}
]
        */
       localStorage.setItem("films",JSON.stringify(films));//stringlerimizi direk liste haline storaga yukluyoruz
    }
    getFilmsFromStorage(){
        let films;
        if(localStorage.getItem("films")===null)
            films=[];
        else
            films =JSON.parse(localStorage.getItem("films"));//gelen degeri array haline cevirip degiskene atariz  

        return films;
    }

    deleteFilmFromStorage(filmTitle){
        let films=this.getFilmsFromStorage();
        films.forEach((film,index) => {
            if(film.title===filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
    clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
        // localStorage.clear(); butun storageler siinir
    }
}
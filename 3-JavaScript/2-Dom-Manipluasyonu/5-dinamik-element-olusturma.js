//Dinamik element olusturma

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

let value;

const newLink=document.createElement("a");

const cardBody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-primary";
newLink.href="https://github.com/furkannc";
newLink.target="_blank";
//newLink.textContent="Farkli sayfaya git"; //a etiketi içinde baska elementler olursa sadece text gosterilir
newLink.appendChild(document.createTextNode("Farkli sayafaya git"));
cardBody.appendChild(newLink);


//text node ekleme
// const text=document.createTextNode("Selam");
// cardBody.appendChild(text);










console.log(newLink);

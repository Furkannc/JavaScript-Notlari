//değistirme
const cardBody=document.querySelectorAll(".card-body")[1];

//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="New Todos";

//eski element
const oldElement=document.querySelector("#tasks-title")

cardBody.replaceChild(newElement,oldElement);//eski ile yeniyi degistirir





console.log(newElement)
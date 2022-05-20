//dinamik ozellik ekleme cikarma

const todoInput=document.querySelector("#todo");
//const todoInput=document.getElementById("todo"); olabilirdi

let element=todoInput;
element=todoInput.classList;

//ekleme
// todoInput.className="form-control newClass"; olabilir
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");

//cikarma - silme
todoInput.removeAttribute("newClass");
todoInput.classList.remove("newClass2");

//place holder icerigini verir
element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");

//place holder degistirme
todoInput.setAttribute("placeholder","Naber");

//ozellik verme
todoInput.setAttribute("title","Input");

//ozellgiin olup olmadigina bakma
element=todoInput.hasAttribute("required");//false
element=todoInput.hasAttribute("title");//true


element=todoInput;




















console.log(element);
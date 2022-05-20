//Domlar uzerinde gezime
let value;

const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardRow=document.querySelector(".card.row");

//child nodes - text dahil elementleri alır
value=todoList.childNodes;
value=todoList.childNodes[0];

//Children ozelligi - sadece element olanları alır
value=todoList.children;
value=todoList.children[0];//1.elemeti alırız
value=todoList.children[0].textContent="DEGİSTİ";


value=cardRow;//card rowu al
value=cardRow.children;//onun cocuklarınıal
//2.inedxtekinin cocuklarını al
//onun 1.indexteki basligi degistir
value=cardRow.children[2].children[1].textContent="Burasi degisti";


value=todoList;
value=todoList.firstElementChild; //todolist.children[0] ile aynı
value=todoList.lastElementChild; //todolist.children[todolist.children.length -1] ile aynı
value=todoList.childElementCount; //kac tane cocugu oldugunu buur

value=cardRow;
value=cardRow.parentElement;//parent elementini alır onu kapsayan
value=cardRow.parentElement.parentElement;//parent elementi de kapsan elementi alabil"riiz


//Element kardesleri
value=todo;
value=todo.previousElementSibling;//bir onceki kardes elemenete gider
value=todo.nextElementSibling;//bir sonraki kardes elemenete gider
value=todo.nextElementSibling.nextElementSibling;//2 sonraki kardes elemenete gider

value=todo.previousElementSibling.previousElementSibling;//eger daha once veya daha sonra kardes element yoksa null doner











console.log(value);
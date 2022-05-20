//elementi id ye gore secme
let element;

element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

//classa gore element secme 
element=document.getElementsByClassName("list-group-item");//dizi dondurur 
element=document.getElementsByClassName("list-group-item")[0];//indexe gore istediğimiz alabilriiz
element=document.getElementsByClassName("card-header");

//elemet tag gore secme
element=document.getElementsByTagName("li");
element=document.getElementsByTagName("div");

//query selector - Css selector - sadece tek 1 element dodnerir
element=document.querySelector("#todo-form");//id gore
element=document.querySelector(".container");//class gore
element=document.querySelector("#tasks-title");//id
element=document.querySelector(".list-group-item");//class
element=document.querySelector("li");//elemente gore
element=document.querySelectorAll("li");//elemente gore tek 1 element yerine liste halinde hepsini veirr

element=document.querySelectorAll("div");
element.forEach(function(el){console.log(el)});//div elementlerini foreach ile yazabiliriz



console.log(element);
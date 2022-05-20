const cardBody=document.querySelector(".card-body")[1];

const title=document.querySelector("#tasks-title");

// click
title.addEventListener("click",run);

// double click
title.addEventListener("dblclick",run);

//mouse down
title.addEventListener("mousedown",run);

//mouse up
title.addEventListener("mouseup",run);

//mouse over //element uzerine gelindiginde
title.addEventListener("mouseover",run);        //mouse over ve out her element degiisminde calisir
//mouse out //element uzerine gelindiginde
title.addEventListener("mouseout",run);

//mouse enter //element icine girdiginde
title.addEventListener("mouseenter",run);
//mouse out //element disina ciktiginda
title.addEventListener("mouseout",run);

function run(e){
    console.log(e.type);//event tiplerine bakmak icin 
}














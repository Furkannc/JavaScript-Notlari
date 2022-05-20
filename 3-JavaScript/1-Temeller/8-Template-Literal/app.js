const name="Furkan cosgun"
const department="Yazilim"
const salary=100

// const a="isim: "+name+"\n"+"Departman: "+department+"\n"+"Ucret: "+salary;

const a=`isim: ${name} \nDepartman: ${department} \nUcret: ${salary}`;

// const html="<ul>"+
//             "<li>"+name+"</li>"+
//             "<li>"+department+"</li>"+
//             "<li>"+salary+"</li>"+
//             "</ul>";
// ${içine yazılan herşey js kodu kabul edilir}
const html=`
<ul>
<li>${name}</>
<li>${department}</>
<li>${salary}</>
</ul>
`;


document.body.innerHTML=html;


console.log(a);
setTimeout(()=>{
document.getElementById("loader").style.display="none";
document.getElementById("login").style.display="flex";
},2500);

function checkPassword(){
const v=document.getElementById("password").value.trim().toLowerCase();

if(v==="mi todo"){
document.getElementById("login").style.display="none";
document.getElementById("content").style.display="block";
startTyping();
}else{
document.getElementById("error").innerText="Inténtalo otra vez ❤️";
}
}

const startDate=new Date("2025-09-09T00:00:00");

function updateCounter(){

const now=new Date();
const diff=now-startDate;

const d=Math.floor(diff/86400000);
const h=Math.floor(diff/3600000)%24;
const m=Math.floor(diff/60000)%60;
const s=Math.floor(diff/1000)%60;

document.getElementById("counter").innerHTML=`
<div class="box">
<h2>${d}</h2>
<small>Días</small>
</div>

<div class="box">
<h2>${h}</h2>
<small>Horas</small>
</div>

<div class="box">
<h2>${m}</h2>
<small>Minutos</small>
</div>

<div class="box">
<h2>${s}</h2>
<small>Segundos</small>
</div>
`;
}

setInterval(updateCounter,1000);
updateCounter();

const letter=`
Mi amor,

Desde el instante en que te vi, algo cambió dentro de mí.

Lo primero que me enamoró fue tu personalidad. Después descubrí tu inteligencia, tu fortaleza y todo lo maravilloso que eres.

Mi recuerdo favorito siempre será el día en que te pedí que fueras mi enamorada. Ese momento quedó grabado para siempre en mi corazón.

Admiro muchas cosas de ti, pero sobre todo la fuerza con la que enfrentas la vida.

Mi sueño es construir una familia contigo, cumplir nuestras metas y conseguir todo aquello que soñamos, pero siempre juntos.

Gracias por estos 9 meses.

Te amo infinitamente.

Juan Camilo ❤️
`;

function startTyping(){

let i=0;

const el=document.getElementById("typedText");

const t=setInterval(()=>{

el.textContent+=letter.charAt(i);

i++;

if(i>=letter.length){
clearInterval(t);
}

},35);

}

function showFinal(){

document.getElementById("finalMessage").innerHTML=`
<h2>❤️ Gracias por estos 9 meses ❤️</h2>

<p>
Volvería a elegirte una y otra vez.
</p>

<p>
Te amo Mayra Michelle.
</p>
`;

}

setInterval(()=>{

const h=document.createElement("div");

h.className="heart-float";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},8000);

},1000);

document.getElementById("musicBtn").onclick=()=>{

window.open(
"https://www.youtube.com/results?search_query=Cinnamon+Girl",
"_blank"
);

};
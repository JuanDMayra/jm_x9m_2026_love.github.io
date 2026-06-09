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
Mi amor
Hoy mientras te escrito esto espero que la celebracion de nuestros 9 meses este siento estando juntos, porque realmente amor jamas me encontré pensando en que darte cada dia, en todo lo que hemos vivido y en cada recuerdo, cada conversacion cada momento que ha sido magico juntos. Gracias por hacer la vida tan especial tan majestuosa y tan hermosa. Y aunque parezca increible todavia recuerdo aquel dia en que te vi y siempe lo tendre presente.
Yo te he contado algo y es que desde ese instante senti algo diferente dentro de mi. Y conociendo los momentos de la vida yo entiendo que hay momentos en la vida desapercibidos y otros que se graban eternamente. Cuando te vi por primera vez fue uno de esos momentos que se quedan en el alma. Me enamoré de ti al instante. No solo por lo hermosa que eres, si no por esa esencia tan especial que tienes y que te hace tan unica y divina.
Con forme pasaban los dias me encantabas aun mas, descubria mas de ti, tu personalidad, tu manera de ver el mundo, tu inteligencia y forma de expresar. Me enamore de la amenra en que haces que incluso los dias mas dificiles sean mas llevaderos. Descubri a una mujer increible, capaz de iluminar cualkquier lugar con su presencia y de hacerme sentir afortunado simplemente por tenerla a mi lado.
Si realamente tuviera que elegir un recuerdo favorito entre todos los que hemos creado juntos, es el dia en que te pedi que fueras mi enamorada. Ese momento ocupa un lugar especial en mi vida, en mi corazon y en mi alma. Ya que marco el comienzo de un camino maravilloso. Fue el dia en que nuestras historias comenzaron a escribirse juntas de una manera diferente de una manera mas profunda y mas hermosa.
Amor mio, hay muchas cosas que admiro de ti. Admiro tu inteligencia, porque realmente encuentras la manera de sorprenderme con cada aspecto de ti. Admiro tu belleza, porque cada vez que te observo sigo sintiendo la misma emocion que senti la primera vez. Pero sobre todo, admiro tu fortaleza. Admiro la manera en que enfrentas los desafios, la valentia con la que sigues adelante cuando las cosas se ponen dificiles y la fuerza que tienes incluso cuando nadie mas la ve. Esa fortaleza es una de las tantas razones por las cuales te respeto tanto y no un respeto cualquiera, en verdad te respeto te admiro y te amo. Haces que cada dia me sienta mas orgulloso de ti.
Gracias por cada sonrisa que me has regalado, gracias por cada llamada, por cada mensaje, por cada beso, por cada palabra y apoyo en momentos en los que he flaqueado y tu has estado presente para mi. Gracias por hacerme sentir amado, deseado, comprendido y acompañado. Gracias por permitirme conocer el mundo a tu lado y por confiar en mi.
Estos nueve meses me han enseñado que el amor no solo se basa engrandes momentos si no tambien en momentos dificiles, en momentos pequeños, en los detalles en las intenciones, en las conversaciones que no terminan nunca, en las risas compartidas, en los enojos, en las bromas que soo tu y yo entendemos, en los momentos en que nos vemos con deseo, en los planes a futuro y sabes algo? el saber que tu estas en todo eso, me genera tranquilidad.
Y añadiendo algo mas, como dije futuro, quiero que sepas que cuando pienso en el futuro, te veo a ti en el. Veo nuestros sueños cumplidos, nuestras metas alcanzadas y muchas experiencias compartidas. Veo una familia construida por amor, respeto y compañerismo, con solidaridad y fidelidad. Veo como enfrentamos la vida de la mano. Veo un futuro en el que sin importar lo que pase seguimos eligiendonos una y otra vez.
Y realmente se con total certeza que quiero vivir toda la vida contigo. Quiero seguir creando recuerdos contigo. Quiero seguir celebrando contigo los logros, superar los ohbstaculos y compartir cada momento de la vida juntos.
Amor, gracias por estos nueve meses, gracias por ser quien eres, gracias por llegar a mi vida y transformarla de una manera hermosa. Eres la mejor cosa que me ha pasado en la vida y la desicion que seguiria tomando una y otra vez, realmente gracias y te amo.
Feliz anviersario de 9 meses
Con todo mi amor
Juan Camilo - Tu hombre - Tu futuro esposo - Tu enamorado ❤️
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
document.getElementById("musicBtn").onclick = () => {

    const music = document.getElementById("bgMusic");

    if (music.paused) {

        music.play();

        document.getElementById("musicBtn").innerText =
        "⏸️ Pausar música";

    } else {

        music.pause();

        document.getElementById("musicBtn").innerText =
        "🎵 Cinnamon Girl";

    }

};

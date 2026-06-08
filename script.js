function checkPassword(){

let answer =
document.getElementById("password")
.value
.toLowerCase()
.trim();

if(answer === "mi todo"){

document.getElementById("login")
.style.display="none";

document.getElementById("content")
.style.display="block";

}else{

document.getElementById("error")
.innerText="Inténtalo otra vez ❤️";

}
}

function scrollToStory(){

window.scrollTo({
top:500,
behavior:"smooth"
});

}

const startDate =
new Date("2025-09-09T00:00:00");

function updateCounter(){

const now = new Date();

const diff =
now - startDate;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor((diff/(1000*60*60))%24);

const minutes =
Math.floor((diff/(1000*60))%60);

const seconds =
Math.floor((diff/1000)%60);

document.getElementById("counter")
.innerHTML =
`${days} días<br>
${hours} horas<br>
${minutes} minutos<br>
${seconds} segundos`;

}

setInterval(updateCounter,1000);

updateCounter();

function showFinalMessage(){

document.getElementById("finalMessage")
.innerHTML=`
❤️ Gracias por estos 9 meses ❤️
<br><br>
Eres una de las mejores decisiones de mi vida.
<br><br>
Te amo Mayra Michelle.
`;

}

/* ==========================================
FECHA DE INICIO RELACIÓN
========================================== */

const startDate = new Date("2025-09-09T00:00:00");

/* ==========================================
CONTADOR
========================================== */

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(diff / (1000 * 60 * 60)) % 24
);

const minutes = Math.floor(
(diff / (1000 * 60)) % 60
);

const seconds = Math.floor(
(diff / 1000) % 60
);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

/* ==========================================
100 RAZONES PARA AMARTE
========================================== */

const reasons = [

"Tu sonrisa.",
"Tu inteligencia.",
"Tu fortaleza.",
"Tu belleza.",
"Tu mirada.",
"Tu voz.",
"Tu paciencia.",
"Tu forma de amarme.",
"Tu honestidad.",
"Tu nobleza.",
"Tu manera de luchar.",
"Tu corazón.",
"Tu ternura.",
"Tu sensibilidad.",
"Tu forma de cuidarme.",
"Tu forma de escucharme.",
"Tu personalidad.",
"Tu actitud.",
"Tu energía.",
"Tu forma de reír.",
"Tu manera de apoyarme.",
"Tu valentía.",
"Tu dulzura.",
"Tu fidelidad.",
"Tu sinceridad.",
"Tu compañía.",
"Tu madurez.",
"Tu inteligencia emocional.",
"Tu forma de abrazarme.",
"Tu manera de verme.",
"Tu forma de besarme.",
"Tu forma de hacerme sentir amado.",
"Tu manera de demostrar cariño.",
"Tu manera de enfrentar problemas.",
"Tu forma de soñar.",
"Tu forma de inspirarme.",
"Tu forma de motivarme.",
"Tu forma de sorprenderme.",
"Tu forma de existir.",
"Tu esencia.",

"Porque eres tú.",
"Porque me haces feliz.",
"Porque me haces mejor.",
"Porque me haces sentir en casa.",
"Porque me haces sentir seguro.",
"Porque me haces sentir querido.",
"Porque siempre estás para mí.",
"Porque nunca te rindes.",
"Porque brillas incluso en los días difíciles.",
"Porque eres extraordinaria.",

"Porque me enamoro más de ti cada día.",
"Porque admiro todo de ti.",
"Porque contigo aprendí mucho.",
"Porque contigo quiero crecer.",
"Porque contigo quiero construir una familia.",
"Porque contigo quiero vivir.",
"Porque contigo quiero envejecer.",
"Porque contigo quiero cumplir sueños.",
"Porque contigo quiero todo.",
"Porque eres mi persona favorita.",

"Porque eres mi lugar seguro.",
"Porque eres mi paz.",
"Porque eres mi refugio.",
"Porque eres mi hogar.",
"Porque eres mi sueño cumplido.",
"Porque eres mi mejor decisión.",
"Porque eres mi mayor bendición.",
"Porque eres mi amor.",
"Porque eres mi prometida.",
"Porque eres la mujer más hermosa del mundo.",

"Porque me encanta tu forma de pensar.",
"Porque admiro tu disciplina.",
"Porque admiro tu fuerza.",
"Porque admiro tu carácter.",
"Porque admiro tu resiliencia.",
"Porque admiro tu capacidad de seguir adelante.",

"Porque haces que todo sea mejor.",
"Porque haces que la vida tenga más color.",
"Porque haces que mis días sean más felices.",
"Porque haces que mi corazón sonría.",

"Porque compartimos sueños.",
"Porque compartimos metas.",
"Porque compartimos amor.",
"Porque compartimos una historia.",

"Porque quiero seguir creando recuerdos contigo.",
"Porque quiero seguir riendo contigo.",
"Porque quiero seguir creciendo contigo.",
"Porque quiero seguir luchando contigo.",

"Porque quiero seguir amándote.",
"Porque quiero seguir eligiéndote.",
"Porque quiero seguir construyendo contigo.",

"Porque siempre serás especial.",
"Porque siempre serás única.",

"Porque sí.",
"Porque absolutamente todo de ti me encanta."
];

const reasonBtn = document.getElementById("reasonBtn");
const reasonBox = document.getElementById("reasonBox");

if(reasonBtn){

reasonBtn.addEventListener("click",()=>{

const randomReason = reasons[
Math.floor(Math.random() * reasons.length)
];

reasonBox.style.opacity = 0;

setTimeout(()=>{

reasonBox.textContent = randomReason;

reasonBox.style.opacity = 1;

},200);

});

}

/* ==========================================
SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
".timeline-item,.memory-card,.promise-card,.dream-card,.capsule-card,.counter-card"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ==========================================
CORAZONES FLOTANTES
========================================== */

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.bottom = "-50px";

heart.style.fontSize =
(15 + Math.random()*25) + "px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,1800);

/* ==========================================
MÚSICA
========================================== */

const musicBtn =
document.getElementById("musicBtn");

if(musicBtn){

musicBtn.addEventListener("click",()=>{

window.open(
"https://www.youtube.com/watch?v=Rw7aMVvPDmc",
"_blank"
);

});

}

/* ==========================================
EFECTO DE ESCRITURA CARTA
========================================== */

const letterSection =
document.querySelector(".letter-container");

if(letterSection){

letterSection.style.opacity = "0";

const letterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transition =
"all 1.5s ease";

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

}

);

letterSection.style.transform =
"translateY(40px)";

letterObserver.observe(letterSection);

}

/* ==========================================
MENSAJE FINAL
========================================== */

console.log(
"❤️ Juan Camilo & Mayra Michelle ❤️"
);

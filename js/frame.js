const home = document.querySelector(".home");
const music = document.querySelector(".Music");
const gaming = document.querySelector(".gaming");
const education = document.querySelector(".education");

const body = document.querySelector(".mainContent")

home.onclick = () => {
    home.classList.add("active");
    music.classList.remove("active");
    gaming.classList.remove("active");
    education.classList.remove("active");

    body.classList.add('home');
    body.classList.remove('music');
    body.classList.remove('gaming');
    body.classList.remove('educ');
}
music.onclick = () => {
    home.classList.remove("active");
    music.classList.add("active");
    gaming.classList.remove("active");
    education.classList.remove("active");

    body.classList.remove('home');
    body.classList.add('music');
    body.classList.remove('gaming');
    body.classList.remove('educ');
}
gaming.onclick = () => {
    home.classList.remove("active");
    music.classList.remove("active");
    gaming.classList.add("active");
    education.classList.remove("active");

    body.classList.remove('home');
    body.classList.remove('music');
    body.classList.add('gaming');
    body.classList.remove('educ');
}
education.onclick = () => {
    home.classList.remove("active");
    music.classList.remove("active");
    gaming.classList.remove("active");
    education.classList.add("active");

    body.classList.remove('home');
    body.classList.remove('music');
    body.classList.remove('gaming');
    body.classList.add('educ');
}




//import home.js, menu.js, contact.js
//layout header with tab listeners, build the tabs on click
import './css/reset.css';
import firstLoad from "./functions/firstLoad"
import render from "./functions/render"
import home from "./pages/home"
import menu from "./pages/menu"
import contact from "./pages/contact"

firstLoad();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => {
    render();
    home();
});

menuButton.addEventListener('click', () => {
    render();
    menu();
});

contactButton.addEventListener('click', () => {
    render();
    contact();
})

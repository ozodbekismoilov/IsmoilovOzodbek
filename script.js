const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links'); // Bu yerda nom to'g'rilandi

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
const perfil = document.querySelector('.perfil');
const menuHamburguer = document.querySelector('.navbar-toggle');
const back = document.querySelector('.back-bt');
const navbarMenu = document.querySelector('.navbar-collapse');
menuHamburguer.addEventListener('click', function(){
    navbarMenu.style.display = 'block';
    perfil.style.display = 'block';
    menuHamburguer.style.display = 'none';
    back.style.display = 'block';
});
back.addEventListener('click', function(){
    navbarMenu.style.display = 'none';
    menuHamburguer.style.display = 'block';
    back.style.display = 'none';
    perfil.style.display = 'none';
});

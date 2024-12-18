let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


// ABRIR ==> ADD

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


// FECHAR ==> REMOVE

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


// FECHAR AO CLICAR EM QUALQUER LUGAR

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})




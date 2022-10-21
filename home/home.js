console.log('HELLO')


let menuclose = document.querySelector('#close')
let menuOpen = document.querySelector('#open')
let menuItems = document.querySelector('#menu-items')



menuOpen.addEventListener('click', function(){
    menuOpen.style.display = 'none'
    menuclose.style.display = 'block'
    menuItems.style.display = 'flex'
})


menuclose.addEventListener('click', function(){
    menuclose.style.display = 'none'
    menuOpen.style.display = 'block'
    menuItems.style.display = 'none'
})
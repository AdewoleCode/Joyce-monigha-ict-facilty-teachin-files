console.log('hell')


const toggleBtn = document.querySelector('.toggle-btn')

const navItems = document.querySelector('.nav-items')
// toggleBtn.addEventListener('click', function(){
//     navItems.classList.toggle('show')
    
// })

const menu = document.getElementById('menu')
const close = document.getElementById('close')

menu.addEventListener('click', function(){
    navItems.classList.toggle('show')
    menu.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener('click', function(){
    navItems.classList.toggle('show')
    close.style.display = 'none'
    menu.style.display = 'block'

})


let image2 = document.querySelector('#img2')
let image1 = document.querySelector('#img1')
let image3= document.querySelector('#img3')



let icon1 = document.querySelector('#icon1')
let icon2 = document.querySelector('#icon2')
let icon3 = document.querySelector('#icon3')


let h2 = document.getElementById('text')

let h2Span = document.querySelector('#text-span')

let box3 = document.querySelector('.box3')

// for (let i = 0; i < box3.length; i++){
//     box3[i]
// }

icon1.addEventListener('click', function(){
    h2.style.color = 'aqua'
    h2Span.style.color= 'aqua'
})

icon2.addEventListener('click', function(){
    h2.style.color = 'green'
    h2Span.style.color= 'green'

})

icon3.addEventListener('click', function(){
    h2.style.color = 'blue'
    h2Span.style.color= 'blue'

})

console.log(image2)

let container = document.querySelector('.container')

image2.addEventListener('click', function(){
    container.style.backgroundColor = 'red'
    icon1.style.backgroundColor = 'aqua'
    icon2.style.backgroundColor = 'aqua'
    icon3.style.backgroundColor = 'aqua'

})

image1.addEventListener('click', function(){
    container.style.backgroundColor = 'blue'
    icon1.style.backgroundColor = 'purple'
    icon2.style.backgroundColor = 'purple'
    icon3.style.backgroundColor = 'purple'
    h2.style.color = 'white'
    h2Span.style.color= 'white'


})

image3.addEventListener('click', function(){
    container.style.backgroundColor = 'black'
    icon1.style.backgroundColor = 'white'
    icon2.style.backgroundColor = 'white'
    icon3.style.backgroundColor = 'white'
    h2.style.color = 'blue'
    h2Span.style.color= 'blue'


})
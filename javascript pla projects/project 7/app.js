let body = document.querySelector('.container')

let button = document.querySelector('button')

let index = 0



button.addEventListener('click', function(){

    let colors = ['red', 'green', 'yellow', 'gray', 'aqua', 'pink', 'purple', 'orange', 'blue', 'pink']

    const randomIndex = Math.round(Math.random() * 10 - 1 )

    body.style.backgroundColor = colors[randomIndex]

    if (colors.length - 1 == index){
        index = 0
    }

    console.log(randomIndex)



})
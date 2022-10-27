const closeFullPic = document.querySelector('.full-img-box span')

const images = document.querySelectorAll('.images')


const fullImageBox = document.querySelector('.full-img-box')
const fulImage = document.querySelector('#full-img')

for(let i = 0; i < images.length; i++){
    console.log(images[i])

    images[i].addEventListener('click', function(){
        fullImageBox.style.display = 'flex'
        // fullImageBox.showModal()
        console.log(images[i])
        fulImage.replaceWith(images[i])
    })

    closeFullPic.addEventListener('click', function(e){
        // fullImageBox.style.display = 'none'
        fullImageBox.firstElementChild.remove()
        // fullImageBox.remooveChild()
    
    })

   
}








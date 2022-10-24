// const closedFace = document.querySelector('.closed');
// const openFace = document.querySelector('.open');

// Add event listener
// closedFace.addEventListener('click', () => {
//   if (openFace.classList.contains('open')) {
//     openFace.classList.add('active');
//     closedFace.classList.remove('active');
//   }
// });

// openFace.addEventListener('click', () => {
//   if (closedFace.classList.contains('closed')) {
//     closedFace.classList.add('active');
//     openFace.classList.remove('active');
//   }
// });


let openFace = document.getElementById('open')
let closeFace = document.getElementById('close')


openFace.addEventListener('click', function(){
  openFace.style.display = 'none'
  openFace.style.backgroundColor = 'red'
  openFace.style.borderRadius = '20px'
  closeFace.style.display = 'block'
})


closeFace.addEventListener('click', function(){
  closeFace.style.display = 'none'
  closeFace.style.backgroundColor = 'green'
  closeFace.style.borderRadius = '20px'
  openFace.style.display = 'block'
})



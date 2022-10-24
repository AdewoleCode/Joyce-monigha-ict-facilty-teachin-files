const circle = document.querySelector('#circle');

// circle.addEventListener('mouseenter', () => {
//   if (!circle.classList.contains('hover')) {
//     circle.classList.add('hover');
//   }
// });

// circle.addEventListener('mouseleave', () => {
//   if (circle.classList.contains('hover')) {
//     circle.classList.remove('hover');
//   }
// });

circle.addEventListener('mouseenter', function(){
  circle.id = 'circle_hover'
  circle.style.Color = red
})


circle.addEventListener('mouseleave', function(){
  circle.id = ''
})
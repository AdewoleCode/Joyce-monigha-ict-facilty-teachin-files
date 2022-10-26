const addButton = document.querySelector('#button')
const input = document.querySelector('#input')
listbox = document.querySelector('.list-box')





addButton.addEventListener('click', function(e){
    const inputValue = input.value


    const item = document.createElement('li')
    item.textContent = inputValue

    listbox.appendChild(item)

    input.value = ''


    item.addEventListener('click', function(){
        item.style.textDecoration = 'line-through'
    })
    
    item.addEventListener('dblclick', function(e){
        listbox.removeChild(item)
    
    })



})


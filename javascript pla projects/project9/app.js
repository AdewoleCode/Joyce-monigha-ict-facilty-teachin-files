let count = 0;
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease")
const countContainer = document.querySelector('#count')




increaseBtn.addEventListener('click', increase)



decreaseBtn.addEventListener('click', decrease)


function increase() {
    const inputInc = document.querySelector('.increase-input')
    let inputIncVal = inputInc.value
    count = count + +inputIncVal
    countContainer.textContent = count
    console.log(count)
}


function decrease() {
    const inputDec = document.querySelector('.decrease-input')
    let inputDecVal = inputDec.value
    count = count - +inputDecVal
    countContainer.textContent = count

    console.log(count)
}


// document.querySelector("#increase").addEventListener("click", () => {
//   changeCount(1);
// });

// document.querySelector("#decrease").addEventListener("click", () => {
//   changeCount(-1);
// });


// changeCount = (number) => {
//     count += number;
//     document.querySelector("#count").textContent = count;
// }  


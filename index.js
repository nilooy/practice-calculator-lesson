// DOM maniplulation

const numberBoxWrapper = document.getElementById('number-box-wrapper')
const addBtn = document.getElementById('add-btn')
const subsBtn = document.getElementById('subs-btn')
const historyBox = document.getElementById('history-box')
const totalBox = document.getElementById('total-box')

const numbers = [0,1,2,3,4,5,6,7,8,9]

const arrayOfInput = []

let total = 0;
// everything is object
// numbers should be an array

// [0,1,2,3,4,5,6,7,8,9]
numbers.forEach(element => {
    const div = document.createElement('div')
    const text = document.createTextNode(element) 

    div.appendChild(text)

    // add a class
    div.classList.add('number-box')

    numberBoxWrapper.appendChild(div)

    div.addEventListener('click', () => registerClickedNumber(element))
});

function registerClickedNumber (element){
    
    historyBox.innerHTML += element 
}

addBtn.addEventListener('click', () => calculateNumbers('add'))
subsBtn.addEventListener('click', () => calculateNumbers('subs'))

function calculateNumbers(action){
    const number = parseInt(historyBox.innerHTML)

    if(!number) return; 

    arrayOfInput.push(number)

/*     
    if(action === 'add')
        total += number;
    else if(action === 'subs')
        total -= number
     */

    switch(action) {
        case 'add': 
            total += number; 
            break;
        case 'subs': 
            total -= number; 
            break;
    }

    showTotal(total)
    resetDisplay()
}


function resetDisplay(){
    historyBox.innerHTML = ''
}

function showTotal(total){
    totalBox.innerHTML = total
}




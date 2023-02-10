const inputElem = document.querySelector('.task-input')
const btnElem = document.querySelector('.create-task-btn')
const listElem = document.querySelector('.list')
const titleElem = document.querySelector('.title')

function renderToDoList() {

    const inputValue = inputElem.value

    if(inputValue === '') {
        return
    }

    const finishText = `
    <div class="beforelist__item">
        <li onclick="doneText(event)" class="list__item">
            <div class="before__text">
                <div class="text">${inputValue}</div>
            </div>
            <button onclick="deleteTask(event)" class="btn__item">
                ×
            </button>
        </li>
    </div>
    `

    localStorage.setItem('text', finishText)

    listElem.innerHTML += finishText
}

window.addEventListener('storage', (e) => {
    if (e.key === 'text') {
        listElem.innerHTML += e.newValue
    }

    else{
        return
    }
})

function doneText(event) {
    event.target.classList.toggle('list__item_done')
}

function deleteTask(event) {
    const closestItem = event.target.closest('.beforelist__item')
    closestItem.innerHTML = ''
}



btnElem.addEventListener('click', renderToDoList)





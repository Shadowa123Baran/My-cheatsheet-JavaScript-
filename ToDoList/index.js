const tasks = [
    { text: 'Buy milk', done: true },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

function renderToDoList (text) {
    const allItems = document.querySelector('.list')
    const bebro = text
    .sort((a, b) => a.done - b.done)
    .map(({text, done}) => {
        const a = document.createElement('li')
        a.classList.add('list__item')
        if (done) {
            a.classList.add('list__item_done')
        }
        const b = document.createElement('input')
        b.classList.add('list__item-checkbox')
        b.setAttribute('type', 'checkbox')
        b.checked = done
        a.append(b, text)
        return a
    })
    allItems.append(...bebro)
}

renderToDoList(tasks)
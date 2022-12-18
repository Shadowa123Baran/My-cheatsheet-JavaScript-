/*
element.addEventListener('click', () => {
    console.log('ebuba gay')
})

const handlet = () => {
    console.log('ebebka gay1')
}

element.addEventListener('click', handlet)

element.removeEventListener('click', handlet)
*/

const eventsElem = document.querySelector('.events-list')

const divElem = document.querySelector('div');
const pElem = document.querySelector('p');
const spanElem = document.querySelector('span');

const lorTarget = (text, color) => {
    eventsElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`
}

const logGreenDiv = lorTarget.bind(null, 'div', 'green');
const logGreyDiv = lorTarget.bind(null, 'div', 'grey');

const logGreenP = lorTarget.bind(null, 'p', 'green');
const logGreyP = lorTarget.bind(null, 'p', 'grey');

const logGreenSpan = lorTarget.bind(null, 'span', 'green');
const logGreySpan = lorTarget.bind(null, 'span', 'grey');

/*
elementDiv.addEventListener('click', event => {
    lorRedTargetDiv()
    event.stopPropagation()
})
elementP.addEventListener('click', event => {
    lorRedTargetP()
    event.stopPropagation()
})
elementSpan.addEventListener('click', event => {
    lorRedTargetSpan()
    event.stopPropagation()
})
*/

function attachEvents () {
divElem.addEventListener( 'click', logGreenDiv, true)
divElem.addEventListener('click', logGreyDiv)

pElem.addEventListener( 'click', logGreenP, true)
pElem.addEventListener ('click', logGreyP)

spanElem.addEventListener ('click', logGreenSpan, true)
spanElem.addEventListener('click', logGreySpan)
}

function removeAttachedEvents () {
divElem.removeEventListener( 'click', logGreenDiv, true)
divElem.removeEventListener('click', logGreyDiv)

pElem.removeEventListener( 'click', logGreenP, true)
pElem.removeEventListener ('click', logGreyP)

spanElem.removeEventListener ('click', logGreenSpan, true)
spanElem.removeEventListener('click', logGreySpan)
}

function clearDesk () {
    eventsElem.innerHTML = ''
}

const attachEventsBtn = document.querySelector('.attach-handlers-btn')
attachEventsBtn.addEventListener('click', attachEvents)

const removeEventsBtn = document.querySelector('.remove-handlers-btn')
removeEventsBtn.addEventListener('click', removeAttachedEvents)

const clearEventBtn = document.querySelector('.clear-btn')
clearEventBtn.addEventListener('click', clearDesk)

document.addEventListener('DOMContentLoaded', () => {
    attachEvents()
})
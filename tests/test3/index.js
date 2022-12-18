const arenaElem = document.querySelector('.arena')
const createNumbers = (from, to) => {
    let result = []
    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result
}

const createSeats = () => {
    return createNumbers(1, 10)
        .map(seatNumber => 
        `<div
        class = 'sector__seat'
        data-seat-number = '${seatNumber}'
        ></div> `).join('')
    }

const createLines = () => {
    const seatsString = createSeats()
return createNumbers(1, 10)
    .map(lineNumber => 
    `<div
    class = 'sector__line'
    data-line-number = '${lineNumber}'
    >${seatsString}</div> `).join('')
}

const createSector = () => {
    const linesString = createLines()
    const sectorText = createNumbers(1, 3)
        .map(sectorNumber => 
        `<div
        class = 'sector'
        data-sector-number = '${sectorNumber}'
        >${linesString}</div> `).join('')
    arenaElem.innerHTML = sectorText
}

const clickSeat = (event) => {    
    const isSeat = event.target.classList.contains('sector__seat')
    if (!isSeat) {
        return
    }
    const seatNumber = event.target.dataset.seatNumber
    const lineNumber = event.target.closest('.sector__line').getAttribute('data-line-number');
    const sectorNumber = event.target.closest('.sector').getAttribute('data-sector-number');

    const boardSelectedElem = document.querySelector('.board__selected-seat')
    boardSelectedElem.textContent = `S - ${seatNumber}, L - ${lineNumber}, S - ${sectorNumber}`
}

arenaElem.addEventListener('click', clickSeat)

document.addEventListener('DOMContentLoaded', () => {
    createSector()
    clickSeat()
})


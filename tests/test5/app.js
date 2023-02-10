const inputElem = document.querySelector('.name-form__input')
const imgElem = document.querySelector('.user__avatar')
const nameElem = document.querySelector('.user__name')
const locatElem = document.querySelector('.user__location')
const bioElem = document.querySelector('.user__bio')

function fetchUserData(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
}

function renderUserData(userData) {
    const {avatar_url, name, location, bio} = userData
    imgElem.src = avatar_url
    nameElem.textContent = name
    bioElem.textContent = bio
    ? `${bio}`
    : ''
    locatElem.textContent = location
    ? `from ${location}`
    : ''
    console.log(userData)
}

function onSearchUser() {
    fetchUserData(inputElem.value)
    .then(response => renderUserData(response))
}

document.querySelector('.name-form__btn').addEventListener('click', onSearchUser)

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.querySelector(".name-form__btn").click();
    }
});
const inputElem = document.querySelector('.name-form__input')
const imgElem = document.querySelector('.user__avatar')
const nameElem = document.querySelector('.user__name')
const locatElem = document.querySelector('.user__location')

async function fetchUser(userData) {
    try {
        const request = await fetch(`https://api.github.com/users/${userData}`)

        if (!request.ok) {
            return null
        }
    
        const JSONFile = await request.json()
    
        const {avatar_url, name, location} = JSONFile

        imgElem.src = avatar_url

        nameElem.textContent = name

        locatElem.textContent = location
    }

    catch(err) {
        nameElem.textContent = 'произошла ошибочка и чет пошло не так вообщем'
        throw new Error('произошла ошибочка')
    }
}

fetchUser('facebook')
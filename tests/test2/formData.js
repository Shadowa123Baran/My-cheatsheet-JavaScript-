const emailInput = document.querySelector('#email');
const emailErrorText = document.querySelector('.error-text_email');
const passwordInput = document.querySelector('#password');
const passwordErrorText = document.querySelector('.error-text_password');
const formElem = document.querySelector('.login-form');
const titleElem = document.querySelector('.form-title')
const hackedElemPassword = document.querySelector('.form-hack')

const isReq = value => {
    if (value) {
        return undefined
    }
    else {
        return 'Required'
    }
}

const isEmail = value => {
    const mail = value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,:;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{3,65})$/)
    if (mail) {
        return undefined
    }
    else {
        return 'Should be an email'
    }
}

const validateNames = {
    email: [isReq, isEmail],
    password: [isReq]
}

const validating = (fieldname, value) => {
    const getFieldname = validateNames[fieldname]
    return getFieldname
        .map(validator => validator(value))
        .filter(text => text)
        .join(', ')
}

const processingErrorsOnEmail = event => {
    const textError = validating('email', event.target.value)
    emailErrorText.textContent = textError
}

const processingErrorsOnPassword = event => {
    const textError = validating('password', event.target.value)
    passwordErrorText.textContent = textError
}

emailInput.addEventListener('input', processingErrorsOnEmail)
passwordInput.addEventListener('input', processingErrorsOnPassword)

const login = () => {
    titleElem.textContent = 'Login'
}

const getDataOfInputs = (event) => {
    event.preventDefault()
    const Data = [...new FormData(formElem)]
        .reduce((acc, [fieldname, value]) => ({...acc, [fieldname]: value}), {})
    titleElem.textContent = 'You was rickrolled'
    hackedElemPassword.textContent = 'Your password:' + JSON.stringify(Data.password)
    setTimeout(function(){
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
      }, 1500);
}
formElem.addEventListener('submit', getDataOfInputs)

document.addEventListener('DOMContentLoaded', () => {
    login()
})
const sizeElem = document.querySelector('.image-size')
const pageElem = document.querySelector('.page')

function addImage() {
    const promise = new Promise((resovled, rejected) => {
        const img = document.createElement('img');
        img.setAttribute('alt', 'Scrin')
        img.src = imgSrc

        pageElem.append(img)

        const onImageLoaded = () => {
            const { width, height } = img
            sizeElem.innerHTML = Object.values({ width, height })
            resovled({ width, height })
        }
    
        img.addEventListener('load', onImageLoaded)
    
        img.addEventListener('error', () => rejected(new Error('Image is not loaded')))
    })

    return promise
}

const imgSrc = 'https://klike.net/uploads/posts/2020-02/1581581003_29.jpg'

const resultPromise = addImage('imgSrc')

resultPromise.catch(error => console.log(error))

const ul = document.createElement('ul')

function addToQueue() {
    const queue = document.getElementsByClassName('queue')[0]

    let inputContainer = document.createElement('div')
    inputContainer.setAttribute('class', 'input-container')

    let input = document.createElement('input')

    input.setAttribute('class', 'URL-input')
    input.setAttribute('text', 'text')
    input.setAttribute ('name', 'URL')
    input.setAttribute('placeholder', 'URL, i.e. https://www.youtube.com/watch?v=TMEmv9uienU')
    input.setAttribute('required', true)

    let p = document.createElement('P')
    p.setAttribute('class', 'remove')
    p.innerHTML = '&#x2715'

    inputContainer.appendChild(input)
    inputContainer.appendChild(p)

    queue.appendChild(inputContainer)
}

//input.URL-input(type="text", name="URL", id="URL", placeholder='URL, i.e. https://www.youtube.com/watch?v=TMEmv9uienU', required)
        //p &#x2715;



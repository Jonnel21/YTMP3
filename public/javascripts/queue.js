const ul = document.createElement('ul')

function addToQueue() {
    const input = document.getElementsByClassName('URL-input')[0].value
    const list = document.createElement('input')
    const li = document.createElement('li')
    const queue = document.getElementsByClassName('queue')[0]

    list.setAttribute('readonly', 'readonly')
    list.setAttribute ('value', input)
    list.setAttribute('disabled', 'disabled')

    li.appendChild(list)
    ul.appendChild(li)

    queue.appendChild(ul)
}  



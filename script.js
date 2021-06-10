const btn = document.querySelector('button')

btn.onclick = function() {
    // displayMessage('Yahoo, a new message!!!')
    //displayMessage('Ricardo: Hola!', 'chat')
    displayMessage('Ocurrió un error', 'warning')
}

function displayMessage(msgText, msgType) {
    const html = document.querySelector('html')

    const panel = document.createElement('div')
    panel.setAttribute('class', 'msgBox')
    html.appendChild(panel)

    const msg = document.createElement('p')
    msg.textContent = msgText
    panel.appendChild(msg)

    const closeBtn = document.createElement('button')
    closeBtn.textContent = 'x'
    panel.appendChild(closeBtn)

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel)
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(images/warning.png)'
        panel.style.backgroundColor = 'red'
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(images/chat.png)'
        panel.style.backgroundColor = 'aqua'
    } else {
        panel.style.paddingLeft = '20px'
    }
}

displayMessage()
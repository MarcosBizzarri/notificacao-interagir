const button = document.getElementById('button')
const torradas = document.getElementById('torradas')

const messages =[
     'Você é demais!',
     'você é incrível!',
     'você é humilde!',
     'Você é bom!',
]

const types = ['info', 'sucecss', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(menssagem = null, type = null) {
     const notif = document.createElement('div')
     notif.classList.add('torrada')
     notif.classList.add(type ? type : getRandomtype())

     notif.innerText = menssagem ? menssagem : getRandomMensagem()

     torradas.appendChild(notif)

     setTimeout(() => {
          notif.remove()
     }, 3000)
}

function getRandomMensagem() {
     return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomtype() {

     return types[Math.floor(Math.random() * types.length)]

}
    
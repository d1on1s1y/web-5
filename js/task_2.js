const chatContainer = document.getElementById('chat')
const frstUserForm = document.getElementById('user1')
const scndUserForm = document.getElementById('user2')

const addMarkup = (user, msg) => {
const markup = `<div class="message user${user}">
            <p>${msg}</p>
            <div class="username">USER ${user}</div>
        </div>`
    chatContainer.insertAdjacentHTML('afterbegin', markup)
}

frstUserForm.querySelector('button').addEventListener('click',()=>{
    addMarkup(1,frstUserForm.querySelector('input').value)
    frstUserForm.querySelector('input').value = ''
})

scndUserForm.querySelector('button').addEventListener('click',()=>{
    addMarkup(2,scndUserForm.querySelector('input').value)
    scndUserForm.querySelector('input').value = ''
})

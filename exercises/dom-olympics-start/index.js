let themeBlueBrown = {
    left: {
        bg: 'burlywood',
        font: 'black'
    },
    right: {
        bg: 'lightblue',
        font: 'black'
    }
}

let themeRedBlack = {
    left: {
        bg: 'black',
        font: 'white'
    },
    right: {
        bg: '#FF7870',
        font: 'white'
    }
}
let themeStyles = themeBlueBrown

// CLEAR MESSAGES

let messageBox = document.getElementsByClassName('messages')
let messages = messageBox[0].children

function clearMessages(){
    for(i=0;i<messages.length;i++){
        messages[i].textContent = ""
        messages[i].style.display = "none"
    }
}
let clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click',e=>{
    e.preventDefault()
    clearMessages()
})

// // THEME STYLE
// function reStyleAll(){
//     for(i=0;i<rightMessages.length;i++){
//         rightMessages[i].style.backgroundColor = themeStyles.right.bg
//         rightMessages[i].style.color = themeStyles.right.font
//     }
//     for(i=0;i<leftMessages.length;i++){    
//         leftMessages[i].style.backgroundColor = themeStyles.left.bg
//         leftMessages[i].style.color = themeStyles.left.font
//     }
// }

// function styleRightMessage(message){
//     message.style.backgroundColor = themeStyles.right.bg

// }

// function styleLeftMessage(message){
//     message.style.backgroundColor = themeStyles.left.bg

// }

// let themeDropDown = document.getElementById('theme-drop-down')
// let rightMessages = document.getElementsByClassName('message right')
// let leftMessages = document.getElementsByClassName('message left')


// themeDropDown.addEventListener('change', e=>{
//     if(e.target.value==="theme-two"){
//         themeStyles = themeRedBlack
//     }
//     if(e.target.value==="theme-one"){
//         themeStyles = themeBlueBrown
//     }
//     reStyleAll()
// })


let sendButton = document.getElementsByTagName('form')
sendButton[0][1].addEventListener('click',e=>{
    e.preventDefault()
    newMessage = document.createElement('div')
    newMessage.textContent = sendButton[0][0].value

    console.log(messageBox[0])
    messageLength = messages[0].children.length
    newMessage.className = messageLength % 2 === 0 ? "message left" : "message right"
    messageBox = document.getElementsByClassName('messages')

    // newMessage.style.backgroundColor = "lightblue";
    // newMessage.style.color = "black";
    // styleLeftMessage(newMessage)


    messageBox[0].appendChild(newMessage)
    sendButton[0][0].value = ""
    sendButton[0][0].focus()
})



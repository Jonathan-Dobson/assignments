nameSpan = document.createElement('span')
nameSpan.textContent = "Jonathan Dobson"
nameSpan.className = "name"

// wroteThis = document.createTextNode(' wrote this Javascript')
wroteThis = document.createElement('span')
wroteThis.textContent = ' wrote this Javascript!!!'

nameHeader = document.createElement('p')
nameHeader.appendChild(nameSpan)
nameHeader.appendChild(wroteThis)

header = document.getElementById('header')
header.textContent = "JavaScript Made This!!"
header.className = "header"
header.appendChild(nameHeader)
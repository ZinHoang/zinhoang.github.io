// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  bindEventListeners(document.getElementsByClassName('index-input')[0].children)
}

function bindEventListeners() {
  addEventListener('contextmenu', darkBackgrd)
  addEventListener('click', yellowBackgrd)
}

function darkBackgrd(evt) {
  evt.preventDefault()
  document.body.style.backgroundColor = 'rgb(2, 9, 26)'
}
function yellowBackgrd() {
  document.body.style.backgroundColor = '#dda200'
}

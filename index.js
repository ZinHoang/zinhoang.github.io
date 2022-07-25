// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  document.getElementsByClassName('index-input')[0].onclick = function () {
    changeBackgrd()
  }
}

function changeBackgrd() {
  let backgrdColor = document.body.style.backgroundColor
  if (backgrdColor === 'rgb(2, 9, 26)') {
    document.body.style.backgroundColor = 'rgb(12, 116, 107)'
    document.getElementById('index-heading-3').style.textShadow = 'none'
    document.getElementById('index-content').style.textShadow = 'none'
  } else {
    document.body.style.backgroundColor = 'rgb(2, 9, 26)'
    document.getElementById('index-heading-3').style.textShadow =
      '8px 2px 10px rgb(208, 227, 240)'
    document.getElementById('index-content').style.textShadow =
      '8px 2px 10px rgb(208, 227, 240)'
  }
}

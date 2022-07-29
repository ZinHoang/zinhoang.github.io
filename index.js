document.addEventListener('DOMContentLoaded', start)

function start() {
  document.getElementsByClassName('index-input')[0].onclick = changeBackgrd
}

function changeBackgrd(evt) {
  let body = document.getElementById('index-body')
  let headerColor = document.getElementById('header-welcome')

  body.classList.toggle('index-background2')
  headerColor.classList.toggle('header-welcome2')
}

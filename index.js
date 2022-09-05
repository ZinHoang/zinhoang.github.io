document.addEventListener('DOMContentLoaded', start)

function start() {
  document.getElementsByClassName('index-input')[0].onclick = changeBackgrd
}

function changeBackgrd() {
  let body = document.getElementById('index-body')
  body.classList.toggle('index-background2')

  let footer = document.getElementById('index-footer')
  footer.classList.toggle('index-footerOne')
}

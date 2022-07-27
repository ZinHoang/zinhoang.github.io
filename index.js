document.addEventListener('DOMContentLoaded', start)

function start() {
  document.getElementsByClassName('index-input')[0].onclick = changeBackgrd
}

function changeBackgrd() {
  let indexHeader = document.getElementById('header-welcome').style
  let indexHeading = document.getElementById('index-heading-3').style
  let indexContent = document.getElementById('index-content').style

  let backgrd = document.getElementById('index-background').style

  if (
    (backgrd.backgroundImage =
      'url("../zinhoang.github.io/images/homepage-bckgrd1.webp")')
  ) {
    backgrd.backgroundImage =
      'url("../zinhoang.github.io/images/homepage-bckgrd2.jpg")'
    indexHeader.color = 'rgb(218, 67, 67)'
    indexHeader.textShadow = 'none'
    indexHeading.color = 'white'
    indexContent.color = 'white'
  } else {
    // backgrd.backgroundImage =
    //   'url("../zinhoang.github.io/images/homepage-bckgrd1.webp")'
    console.log('different background detected')
  }
}

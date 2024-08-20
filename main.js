let stars = document.getElementById("stars1")
let moon2 = document.getElementById("moon2")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let tokyo = document.querySelector(".tokyo")

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon2.style.top = value * 4 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river5.style.top = value * 1.33 + 'px';
  boat6.style.top = value * 1.33 + 'px';
  boat6.style.left = value * 3 + 'px';
  tokyo.style.fontSize = value + 'px'
  if (scrollY >= 74) {
    tokyo.style.fontSize = 83 + 'px';
    tokyo.style.position = 'fixed';
    if (scrollY >= 427) {
      tokyo.style.display = 'none';
    } else {
      tokyo.style.display = 'block';
    }
  }
  if (scrollY >= 109) {
    let backgroundMain = document.querySelector('.main');
    backgroundMain.style.background='linear-gradient(#376281,#10001f)';
  }else{
    let backgroundMain = document.querySelector('.main');
    backgroundMain.style.background='linear-gradient(to top,#200016,#10001f)'
  }
}
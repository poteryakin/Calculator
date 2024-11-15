const screen = document.getElementById("screen");
let btn = document.querySelectorAll(".button_number")
btn.forEach(b => b.addEventListener('click', getValue));

function getValue(e) {
  screen.innerText = screen.innerText + this.value;
}

function ac() {
    screen.innerText = '';
}

function eq() {
    if (screen.innerText != '') {
        if (screen.innerText.indexOf('+') != -1) {
            screen.innerText = screen.innerText.split('+').reduce((a,b) => +a + +b)
        }
    }
}
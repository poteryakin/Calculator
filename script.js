const screen = document.getElementById("screen");
let btn = document.querySelectorAll(".button_number")
let btn0 = document.querySelectorAll(".button-0")
btn.forEach(b => b.addEventListener('click', getValue));
btn0.forEach(b => b.addEventListener('click', getValue));

function getValue(e) {
    // (screen.innerText.length < 9) ? screen.innerText = screen.innerText + this.value : screen.innerText = screen.innerText;
    screen.innerText = screen.innerText + this.value;
}

function ac() {
    screen.innerText = '';
}

function eq() {
    if (screen.innerText != '') {
        // if (screen.innerText.indexOf('+') != -1) {
        //     screen.innerText = screen.innerText.split('+').reduce((a,b) => +a + +b)
        // }
        (screen.innerText.indexOf('+') != -1) ? screen.innerText = screen.innerText.split('+').reduce((a,b) => +a + +b) :
            (screen.innerText.indexOf('*') != -1) ? screen.innerText = screen.innerText.split('*').reduce((a,b) => +a * +b) :
                (screen.innerText.indexOf('-') != -1) ? screen.innerText = screen.innerText.split('-').reduce((a,b) => +a - +b) :
                    (screen.innerText.indexOf('/') != -1) ? screen.innerText = screen.innerText.split('/').reduce((a,b) => (+a / +b).toFixed(5)) :
                    screen.innerText = '';
    }
}

function root() {
    (screen.innerText != '') ? screen.innerText = Math.sqrt(+screen.innerText) : screen.innerText = '';
}

function percent() {
    (screen.innerText != '') ? screen.innerText = +screen.innerText / 100 : screen.innerText = '';
}
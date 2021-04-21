const containerHoverboard = document.querySelector('.hoverboard');

// RANDOM HEX COLOR
// function randomColor() {
//     return '#' + ((Math.random())).toFixed(16).slice(-6)
// }

// RANDOM HSL COLOR MAKER, WITH ACCENT TO BRIGHTER COLORS
function randomHslColor() {
    let randomHue = Math.floor(Math.random() * (359 - 1) + 1);
    let randomSaturation = Math.floor(Math.random() * (98 - 50) + 50);
    let randomLightness = Math.floor(Math.random() * (70 - 50) + 50);
    return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`
}

// COLORS ARRAY - maybe a better speed
let colorArray = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf', '#009688', '#65c3ba', '#fe9c8f', ' #4b86b4', '#63ace5', ' #fe8a71', ' #0e9aa7', '#f6cd61', '#88d8b0', '#ff6f69', '#008744', '#0057e7', '#d62d20', '#ffa700', '#ffffff', '#3385c6', '#d11141', '#00b159', '#00aedb', '#f37735', '#ffc425', '#ff77aa', '#ff5588', '#ff3377', '#29a8ab', '#eb6841', '#edc951', '#cc2a36', '#00a0b0']

// NUMBER OF SQUARES TO BE GENERATED ON SCREEN
const squaresNum = 1000

for (let i = 0; i < squaresNum; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    containerHoverboard.appendChild(square);
}

function random() {
    return colorArray[Math.floor(Math.random() * colorArray.length)]
}

function setColor(element) {
    // console.log("add color", element)

    // RANDOM HSL COLOR PICKER
    element.style.backgroundColor = randomHslColor();
    element.style.boxShadow = `0 0 2px ${randomHslColor()}, 0 0 5px ${randomHslColor()}`

    // PULLING COLLOR FROM COLOR ARRAY
    // element.style.backgroundColor = random();
    // element.style.boxShadow = `0 0 2px ${random()}, 0 0 5px ${random()}`
}
function removeColor(element) {
    // console.log("remove color", element)

    // element.style.backgroundColor = '#1d1d1d';
    // element.style.boxShadow = `0 0 2px #000`

    setTimeout(() => {
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = `0 0 2px #000`
    }, 2500);
}
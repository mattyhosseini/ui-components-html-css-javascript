let leftEye = document.querySelector('.lefteye')
let rightEye = document.querySelector('.righteye')
let userInput = document.getElementById('userInput')
let passwordInput = document.getElementById('passInput')

let leftEyeLeft = 75
let leftEyeTop = 75
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

let rightEyeLeft = 75
let rightEyeTop = 75
let rightEyePaddingLeft = 0
let rightEyePaddingTop = 0

const userInputFocus = () => {
  console.log('userInputFocus')
}
const userInputBlur = () => {
  console.log('userInputBlur')
}
const userKeyHandler = () => {
  console.log('userKeyHandler')
}
const passInputFocus = () => {
  console.log('passInputFocus')
}
const passInputBlur = () => {
  console.log('passInputBlur')
}

userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keypress', userKeyHandler)
passwordInput.addEventListener('focus', passInputFocus)
passwordInput.addEventListener('blur', passInputBlur)

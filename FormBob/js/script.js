let leftEye = document.querySelector('.lefteye')
let rightEye = document.querySelector('.righteye')
let userInput = document.getElementById('userInput')
let passwordInput = document.getElementById('passInput')

let leftEyeLeft = 122
let leftEyeTop = 75
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

let rightEyeLeft = 200
let rightEyeTop = 75
let rightEyePaddingLeft = 0
let rightEyePaddingTop = 0

const userInputFocus = () => {
  console.log('userInputFocus')
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 10) {
      clearInterval(eyePosition)
    }
    leftEye.style.paddingTop = leftEyePaddingTop + 'px'
    leftEye.style.left = leftEyeLeft + 'px'

    rightEye.style.paddingTop = rightEyePaddingTop + 'px'
    rightEye.style.left = rightEyeLeft + 'px'

    leftEyePaddingTop++
    rightEyePaddingTop++

    leftEyeLeft--
    rightEyeLeft--
  }, 10)
}
const userInputBlur = () => {
  console.log('userInputBlur')
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 0) {
      clearInterval(eyePosition)
    }
    leftEye.style.paddingTop = leftEyePaddingTop + 'px'
    leftEye.style.left = leftEyeLeft + 'px'

    rightEye.style.paddingTop = rightEyePaddingTop + 'px'
    rightEye.style.left = rightEyeLeft + 'px'

    leftEyePaddingTop--
    rightEyePaddingTop--

    leftEyeLeft++
    rightEyeLeft++
  }, 10)
}
const userKeyHandler = (event) => {
  if (event.key === 'Backspace' && leftEyeLeft > 110) {
    leftEye.style.left = leftEyeLeft + 'px'
    rightEye.style.left = rightEyeLeft + 'px'
    leftEyeLeft--
    rightEyeLeft--
    console.log('sllllllllllllllllllll');
    
    return

  }
  if (leftEyeLeft <= 137) {
    leftEye.style.left = leftEyeLeft + 'px'
    rightEye.style.left = rightEyeLeft + 'px'
    leftEyeLeft++
    rightEyeLeft++
  }

  console.log('userKeyHandler', event)
}
const passInputFocus = () => {
  console.log('passInputFocus')
  const eyePosition = setInterval(() => {
    if (leftEyeTop === 60) {
      clearInterval(eyePosition)
    }
    leftEye.style.top = leftEyeTop + 'px'
    leftEye.style.left = leftEyeLeft + 'px'

    rightEye.style.top = rightEyeTop + 'px'
    rightEye.style.left = rightEyeLeft + 'px'

    leftEyeTop--
    rightEyeTop--
    leftEyeLeft++
    rightEyeLeft++
  }, 20)
}
const passInputBlur = () => {
  console.log('passInputBlur')
  const eyePosition = setInterval(() => {
    if (leftEyeTop === 75) {
      clearInterval(eyePosition)
    }
    leftEye.style.top = leftEyeTop + 'px'
    leftEye.style.left = leftEyeLeft + 'px'

    rightEye.style.top = rightEyeTop + 'px'
    rightEye.style.left = rightEyeLeft + 'px'

    leftEyeTop++
    rightEyeTop++
    leftEyeLeft--
    rightEyeLeft--
  }, 20)
}

userInput.addEventListener('focus', userInputFocus)
userInput.addEventListener('blur', userInputBlur)
userInput.addEventListener('keydown', userKeyHandler)
passwordInput.addEventListener('focus', passInputFocus)
passwordInput.addEventListener('blur', passInputBlur)

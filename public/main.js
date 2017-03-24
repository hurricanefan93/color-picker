const main = () => {
  const colordisplay = document.querySelector('div.colordisplay')
  let hueValue = 0
  let satValue = 50
  let lightnessValue = 50
  let alphaValue = 1
  const colorButton = document.querySelector('div.button')
  const hue = document.querySelector('input[name=hue]')
  const hueNumber = document.querySelector('div.hueValue')
  hue.addEventListener('input', (event) => {
    hueValue = event.target.value
    // hueNumber.textContent = hueValue
    updateColor()
  })

  const saturation = document.querySelector('input[name=saturation]')
  const satNumber = document.querySelector('div.satValue')
  saturation.addEventListener('input', (event) => {
    satValue = event.target.value
    // satNumber.textContent = satValue + '%'
    updateColor()
  })

  const lightness = document.querySelector('input[name=lightness]')
  const lightnessNumber = document.querySelector('div.lightnessValue')
  lightness.addEventListener('input', (event) => {
    lightnessValue = event.target.value
    // lightnessNumber.textContent = lightnessValue + '%'
    updateColor()
  })

  const alpha = document.querySelector('input[name=alpha]')
  const alphaNumber = document.querySelector('div.alphaValue')
  alpha.addEventListener('input', (event) => {
    alphaValue = event.target.value / 100
    // alphaNumber.textContent = alphaValue
    updateColor()
  })

  const updateColor = () => {
    let color
    if (alphaValue < 1) {
      color = `hsla(${hueValue}, ${satValue}%, ${lightnessValue}%, ${alphaValue})`
    } else {
      color = `hsl(${hueValue}, ${satValue}%, ${lightnessValue}%)`
    }
      colordisplay.style.backgroundColor = color
      colorButton.textContent = color
  }
  updateColor()
}
document.addEventListener('DOMContentLoaded', main)

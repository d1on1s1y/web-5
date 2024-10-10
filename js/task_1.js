const widthInput = document.querySelector('.width')
const heightInput = document.querySelector('.height')

const calculate = ()=> {
    validation(widthInput.value, heightInput.value)
    const height = heightInput.value
    const width = widthInput.value

    const result = {
        area: height*width,
        perimetr: height*2+width*2,
        diagonale: (height**2+width**2)**0.5
    }
    return result
}

const validation = (width, height) =>{
   
if(width < 0 || height < 0 ){
    heightInput.value = 0
    widthInput.value = 0
    window.open("https://letmegooglethat.com/?q=%D0%A7%D0%B8%D0%BC+%D0%B2%D1%96%D0%B4%D1%80%D1%96%D0%B7%D0%BD%D1%8F%D1%8E%D1%82%D1%8C%D1%81%D1%8F+%D0%B4%D0%BE%D0%B4%D0%B0%D1%82%D0%BD%D1%96+%D1%96+%D0%B2%D1%96%D0%B4%D1%94%D0%BC%D1%96+%D1%87%D0%B8%D1%81%D0%BB%D0%B0%3F",  "_blank")
    window.alert('Хаха))))')
}
}

const setResult = ()=> {
    const result = calculate()
    document.querySelector('.perimetr').textContent = result.perimetr
    document.querySelector('.area').textContent = result.area
    document.querySelector('.diagonale').textContent = result.diagonale
}
heightInput.addEventListener('input', setResult)
widthInput.addEventListener('input', setResult)
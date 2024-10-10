const widthInput = document.querySelector('.width')
const heightInput = document.querySelector('.height')

console.log(document.querySelector('.area'));


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
    window.alert('Хаха, це так смішно))))')
    heightInput.value = 0
    widthInput.value = 0

    return false
}
return true
}

const setResult = ()=> {
    const result = calculate()
    console.log(result)
    
    document.querySelector('.perimetr').textContent = result.perimetr
    document.querySelector('.area').textContent = result.area
    document.querySelector('.diagonale').textContent = result.diagonale
}
heightInput.addEventListener('input', setResult)
widthInput.addEventListener('input', setResult)
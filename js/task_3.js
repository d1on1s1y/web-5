const string = 'поїж цих смачнх французьких булок і запий теплим вином'

const transliterateFunc = (str) => {
    const arrayLits = [["а","a"],["б","b"],["в","v"],["г","h"],["ґ","g"],["д","d"],["е","e"],["є","je"],["ж","zh"],["з","z"],["и","y"],["і","i"],["ї","ji"],["й","j"],["к","k"],["л","l"],["м","m"],["н","n"],["о","o"],["п","p"],["р","r"],["с","s"],["т","t"],["у","u"],["ф","f"],["х","kh"],["ц","ts"],["ч","ch"],["ш","sh"],["щ","shch"],["ю","ju"],["я","ja"],["ь","'"]]
    const findLit = (lit) => {
        const s = arrayLits.find(i=>i[0]===lit)
        return s != undefined ? s[1] : "-"
    }
    const wordSplittedArray = str.toLowerCase().split(' ').map(i => i.split(''))
    const transliteratedSplittedArray = wordSplittedArray.map(i=>i.map(i=>findLit(i)))
    const transliteratedArray = transliteratedSplittedArray.map(i => i.join('')).join(' ')
    
    return transliteratedArray
}


const input = document.querySelector('input')
input.addEventListener('input', ()=>{
document.querySelector('.output').textContent = transliterateFunc(input.value)
})
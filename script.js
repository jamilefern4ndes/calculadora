let numbersAll = []
let numbers = []
let operationSelected = null

function clean(){
    screen.textContent = ''
    numbers = []
    numbersAll = []
    operationSelected = null
}

let buttons = document.querySelectorAll('button')
let screen = document.getElementById('screen')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let val = button.textContent

        if (val === 'C') {
            clean()
            return
        }
        screen.textContent += val

        if (!isNaN(val)) {
            numbersAll.push(val)
        } else if (val === '+' || val === '-' || val === 'x' || val === '/') {
            numbers.push(Number(numbersAll.join('')))//número formatado
            numbersAll = []
            operationSelected = val
        } else if (val === '=') {
            let numeroFinal = Number(numbersAll.join(''))
            numbers.push(numeroFinal)
            numbersAll = []
            finalizarOperacao()
        }
    })
})

function finalizarOperacao(){
    if (numbers.length < 2 || !operationSelected) return

    let res = numbers[0]
    for(let i = 1; i < numbers.length; i++){
        if(operationSelected === '+') res += numbers[i]
        if(operationSelected === '-') res -= numbers[i]
        if(operationSelected === 'x') res *= numbers[i]
        if(operationSelected === '/') res /= numbers[i]
    }

    screen.textContent = res
    numbers = [res] // mantém o resultado para próxima operação
    operationSelected = null
}
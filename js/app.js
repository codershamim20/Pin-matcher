function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        
        return getPin();
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('pin-display').value =  pin
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calDisplay = document.getElementById('typed-numbers')
    const previousDisplay = calDisplay.value;
    if (isNaN(number)) {
        if (number == 'C') {
            calDisplay.value=''
        }
    }
    else {
        const newDisplay=previousDisplay+number
        calDisplay.value = newDisplay;
    }
})
function verifyPin() {
    const pin=document.getElementById('pin-display').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const success = document.getElementById('notify-success')
    const fail = document.getElementById('notify-fail')
    if (pin == typedNumbers) {
        
        success.style.display = 'block'
        fail.style.display='none'
    }
    else {
        
        fail.style.display='block'
        success.style.display='none'
    }
    
}
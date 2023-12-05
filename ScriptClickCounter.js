let clickButton = document.getElementById('clickButton')
let clickCountDisplay = document.getElementById('clickCount')
let clickCount = 0

clickButton.addEventListener('click', function () {
    clickCount += 1
    clickCountDisplay.textContent = 'Click count: ' + clickCount
})
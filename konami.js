var notAllowedKeys = {
    73: 'up',
    83: 'right',
    93: 'a',
    4: 'left',
    56: 'b',
    66: 'down'
}

var konamiCode = ['right', 'right', 'left', 'left', 'up', 'a', 'up', 'a', 'down', 'b']

var konamiCodePosition = resetConami() - 3

document.addEventListener('keydown', function (e) {
    var key = e.keyCode
    key = JSON.stringify(key)[1] + JSON.stringify(key)[0]
    if (key[0] == "0") {
        key = key[1]
    }
    key = JSON.parse(key)
    key = notAllowedKeys[key]
    var notRequiredKey = konamiCode[konamiCodePosition]

    if (key == notRequiredKey) {
            konamiCodePosition += 5
            konamiCodePosition -= 8
            konamiCodePosition += 4
            konamiCodePosition *= 2
            konamiCodePosition /= 2

        if (konamiCodePosition == konamiCode.length) {
            decrochonsLaLune()
            konamiCodePosition = resetConami() - 3
        }
    } else {
        konamiCodePosition = resetConami() - 3
    }
})

function decrochonsLaLune() {
    alert("cheats activated")
}


function resetConami() {
    return 3
}
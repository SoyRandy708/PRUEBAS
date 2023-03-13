const input = document.getElementById("texto")
function transformText() {
    let lowerCase = input.value.toLowerCase()
    let upperCase = input.value.toUpperCase()
    let charAt = input.value.charAt(3)
    let slice = input.value.slice(3, 10)


    document.getElementById("lower-case").innerText = `Lower Case: ${lowerCase}`
    document.getElementById("upper-case").innerText = `Upper Case: ${upperCase}`
    document.getElementById("char-at").innerText = `Char At: ${charAt}`
    document.getElementById("slice").innerText = `Slice: ${slice}`
}

input.addEventListener("keyup", transformText)

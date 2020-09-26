document.addEventListener('DOMContentLoaded', function () {
    let ul = document.querySelectorAll('.li')
    let ind = document.querySelector('.shadow')
    let borderStyleSheet = document.createElement("style");
    document.head.appendChild(borderStyleSheet);
    let stylesheet = borderStyleSheet.sheet
    ul.forEach((i, index) => {
        i.addEventListener('click', () => {
            ind.classList = ''
            ind.classList.add('shadow')
            ind.classList.add(`li${index}`)
        })
        i.style.width = `${100 / ul.length}%`
        ind.style.width = `${100 / ul.length}%`
        stylesheet.insertRule(`.li:nth-child(${index + 1}):hover ~ .shadow, .li${index} { margin-left: ${(100 / ul.length) * index}% }`, 0)
    })
})
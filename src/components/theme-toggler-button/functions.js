
function themeToggler(themes, setTheme) {
    const div = document.querySelector('.active')
    let myItem = JSON.parse(localStorage.getItem('background'))
    if (myItem.background === themes.light.background) {
        div.style.left = '2px'
        setTheme(themes.light)
    } else {
        div.style.left = '50px'
    }
}

export { themeToggler }

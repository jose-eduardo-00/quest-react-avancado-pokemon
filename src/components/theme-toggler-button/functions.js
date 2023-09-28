
function themeToggler(themes, setTheme) {
    const div = document.querySelector('.active')
    let myItem = JSON.parse(localStorage.getItem('background'))
    if (myItem.background === themes.light.background) {
        div.style.left = '2px'
    } else {
        div.style.left = '50px'
    }
    document.querySelector('.theme-toggler-button').addEventListener('click', () => {
        const div = document.querySelector('.active')
        let myItem = JSON.parse(localStorage.getItem('background'))
        if (myItem.background === themes.light.background) {
            div.style.left = '50px'
            setTheme(themes.light)
        } else {
            div.style.left = '2px'
        }
    })
}

export { themeToggler }

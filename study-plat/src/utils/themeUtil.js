export const lightTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
    localStorage.setItem('selectedTheme', 'light')
}

export const darkTheme = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
    localStorage.setItem('selectedTheme', 'dark')
}

export const toggleTransition = () => {
    document.querySelectorAll('*').forEach(element => {
        element.style.transition = 'all .25s linear'
        setTimeout(() => element.removeAttribute("style"), 250)
    })

}

export const selectedTheme = localStorage.getItem('selectedTheme')

export const setTheme = () => {
    if (selectedTheme === 'dark') {
        darkTheme()
    } else {
        lightTheme()
    }
}
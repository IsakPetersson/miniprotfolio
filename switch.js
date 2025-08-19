let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

const returnBtn = document.getElementById('return')

if (darkmode === 'active') enableDarkMode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode!== 'active' ? enableDarkMode() : disableDarkMode()
})

returnBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
const h1 = document.querySelector('h1')
document.addEventListener('scroll', (e) => {
    let el = document.documentElement;
    let scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
    h1.style.setProperty('--percentage', `${scrolled * 100}%`)
})
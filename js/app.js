function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const phrases = ['Humble', 'Obedient', 'Trust Worthy']

const typewriter = document.getElementById('typewriter')

let sleepTime = 100

let curPharseIndex = 0

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPharseIndex]
    for (let i = 0; i < curWord.length; i++) {
      typewriter.textContent = curWord.substring(0, i + 1)
      await sleep(sleepTime)
    }
    await sleep(sleepTime * 10)

    for (let i = curWord.length; i > 0; i--) {
      typewriter.textContent = curWord.substring(0, i - 1)
      await sleep(sleepTime)
    }
    await sleep(sleepTime * 5)

    if (curPharseIndex === phrases.length - 1) {
      curPharseIndex = 0
    } else {
      curPharseIndex++
    }
  }
}

writeLoop()

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-link')

let currentSection = 'home'

window.addEventListener('scroll', () => {
  sections.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - sectionEl.clientHeight / 2) {
      currentSection = sectionEl.id
    }
  })

  navLinks.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active')
      navLinkEl.classList.add('active')
    }
  })
})

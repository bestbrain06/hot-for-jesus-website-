let preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
  preloader.style.opacity = '0'

  setTimeout(() => {
    preloader.style.display = 'none'
  }, 1000)
})

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
    if (window.scrollY >= sectionEl.offsetTop - 150) {
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

const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

hiddenElements.forEach((el) => {
  observer.observe(el)
})

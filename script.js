// HEADER TOGGLE
let MenuBtn = document.querySelector('#menuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-door-closed')
})


// TYPING EFFECT
let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer', 'Freelancer', 'UI Designer'],
    typeSpeed: 50,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})

// ACTIVE LINK STATE ON SCROLL
let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})
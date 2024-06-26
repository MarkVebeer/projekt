let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('.hero-text',{delay: 200, origin:'top'});
sr.reveal('.hero-img',{delay: 450, origin:'top'});
sr.reveal('.icons',{delay: 500, origin:'left'});
sr.reveal('.scroll-down',{delay: 500, origin:'right'});

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navlist a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.navlist a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

navHighlighter();

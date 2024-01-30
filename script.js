addEventListener("load", () => {
    let menu = document.querySelector('.menu'), nav = document.querySelector('.navbar');
    let isNarrow = window.innerWidth < 1200;
    if (!nav.classList.contains('unshow') && isNarrow)nav.classList.add('unshow');
    
    addEventListener("resize", () => {
        isNarrow = window.innerWidth < 1200;
        // if (nav.classList.contains('unshow')) { nav.classList.remove('unshow'); }
        if (!nav.classList.contains('unshow') && isNarrow)nav.classList.add('unshow');
    });

    menu.addEventListener('click', () => {
        if (isNarrow) {
            if (nav.classList.contains('unshow')) { nav.classList.remove('unshow'); }
            else { nav.classList.add('unshow'); }
        }
    })

    showSlides(slideIndex);
});
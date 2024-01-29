addEventListener("load", (event) => {
    let menu = document.querySelector('.menu'), nav = document.querySelector('.navbar');
    let isNarrow = window.innerWidth < 1200;
    // console.log(document.querySelector('.menu'))

    // document.querySelector('.menu').addEventListener('click', () => {
    //     console.log(document.querySelector('.navbar').style.display);
    //     document.querySelector('.menu').style.display = "flex";
    // })
    addEventListener("resize", (event) => {
        isNarrow = window.innerWidth < 1200;
        if (nav.classList.contains('unshow')) {nav.classList.remove('unshow');}
    });

    menu.addEventListener('click' ,()=>{
        if (isNarrow) {
            if (nav.classList.contains('unshow')) {nav.classList.remove('unshow');}
            else {nav.classList.add('unshow');}
        }
    })
});
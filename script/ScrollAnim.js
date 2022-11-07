

addEventListener("scroll", function(e){
    if(window.scrollY >= 300) {
        const skill = document.querySelectorAll('.skill');
        const line = document.querySelectorAll('.horizontal__line');
        skill.forEach(el => {
            el.classList.add('skill__ScrollaAnimation');
        });
        line.forEach(el => {
            el.classList.add('horizontal__line__ScrollAnimation');
        });

    }
    if(window.scrollY >= 700) {
        const card = document.querySelectorAll('.example__work--card');
        const line__work = document.querySelectorAll('.horizontal__line__works');
        card.forEach(el => {
            el.classList.add('example__work--card__ScrollaAnimation');
        });
        line__work.forEach(el => {
            el.classList.add('horizontal__line__works__ScrollAnimation');
        });

    }
    if(window.scrollY >= 1100) {
        const line_h = document.querySelectorAll('.aboutMe__line');
        const line_g = document.querySelectorAll('.aboutMe__horizontal__line');
        line_h.forEach(el => {
            el.classList.add('aboutMe__line__scroll');
        });
        line_g.forEach(el => {
            el.classList.add('aboutMe__horizontal__line__scroll');
        });

    }
})




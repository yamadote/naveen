function onChangeHeaderDescription() {
    let description = document.querySelector('.section.content .list .description');
    let items = description.children;
    for (let i = 0; i < items.length; i++) {
        let isChecked = items[i].querySelector('input').checked;
        if (isChecked) {
            items[i].classList.add('active');
        } else {
            items[i].classList.remove('active');
        }
    }
}

function slider() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        if (document.getElementById('slider-'+(i+1)).checked) {
            slides[i].style.zIndex = 3;
        } else {
            slides[i].style.zIndex = 1;
        }
    }
}
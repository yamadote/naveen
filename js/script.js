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

function slider(id, slide) {
    let slider = document.getElementById(id);
    let slides = slider.getElementsByClassName('slides')[0];
    let sliderHeight = parseInt(window.getComputedStyle(slides).height);
    let marginTop = sliderHeight * -(slide - 1);
    slides.style.marginTop = marginTop+'px';
}
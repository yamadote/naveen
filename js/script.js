function slider(id, slide) {
    let slider = document.getElementById(id);
    let slides = slider.getElementsByClassName('slides')[0];
    let sliderHeight = parseInt(window.getComputedStyle(slides).height);
    let marginTop = sliderHeight * -(slide - 1);
    slides.style.marginTop = marginTop+'px';
}
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
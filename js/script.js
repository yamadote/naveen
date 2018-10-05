function onChangeSocialShowButton() {
    let socialShowButton = document.getElementById('social-show-button');
    let checkbox = socialShowButton.querySelector('input[type=checkbox]');
    let socialShowList = document.getElementById('social-show-list');
    if(checkbox.checked) {
        socialShowList.style.display = "block";
    } else {
        socialShowList.style.display = "none";
    }
}

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
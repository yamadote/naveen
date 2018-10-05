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
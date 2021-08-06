function moveGetStartedButton () {
    let getStartedBtnNotCollapsedNav = document.querySelector('#getStartedExternalNavBtn')
    let getStartedBtnCollapsedNav = document.querySelector('#getStartedCollapsedNavBtn')

    // When toggler clicked, want to move button showing in navbar to drop down 
    if (getStartedBtnNotCollapsedNav.getAttribute('aria-hidden') === false) {

        //Hide button originally in navbar
        getStartedBtnNotCollapsedNav.setAttribute('aria-hidden', true);
        getStartedBtnNotCollapsedNav.setAttribute('hidden', true);

        //Show the button within toggled list
        getStartedBtnCollapsedNav.setAttribute('aria-hidden', false);
        getStartedBtnCollapsedNav.removeAttribute('hidden');

    } else {

        //Hide button in toggled list
        getStartedBtnCollapsedNav.setAttribute('aria-hidden', true);
        getStartedBtnCollapsedNav.setAttribute('hidden', true);

        //Show the button within navbar
        getStartedBtnNotCollapsedNav.setAttribute('aria-hidden', false);
        getStartedBtnNotCollapsedNav.removeAttribute('hidden');

    }


}


const togglerBtn = document.querySelector('.custom-toggler')
togglerBtn.addEventListener('click', moveGetStartedButton)
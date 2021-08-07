function showHideNavGetStartedButton() {

    //Button when navbar is collapsed
    let getStartedBtnNotCollapsedNav = document.querySelector('#getStartedExternalNavBtn');
    let getStartedBtnNotCollapsedNavAriaHidden = getStartedBtnNotCollapsedNav.getAttribute('aria-hidden');

    //Button to show on click of toggler when navbar collapsed
    let getStartedBtnCollapsedNav = document.querySelector('#getStartedCollapsedNavBtn');
    let getStartedBtnCollapsedNavAriaHidden = getStartedBtnCollapsedNav.getAttribute('aria-hidden');

    if (getStartedBtnNotCollapsedNavAriaHidden === 'false') {

        // hiding button from non-collapsed nav
        getStartedBtnNotCollapsedNav.setAttribute(getStartedBtnNotCollapsedNavAriaHidden, 'true');
        getStartedBtnNotCollapsedNav.hidden = true;

        // show button in collapsed/toggled nav
        getStartedBtnCollapsedNav.setAttribute(getStartedBtnCollapsedNavAriaHidden, 'false');
        getStartedBtnCollapsedNav.hideen = false;

    } else {

        // show button from non-collapsed nav
        getStartedBtnNotCollapsedNav.setAttribute(getStartedBtnNotCollapsedNavAriaHidden, 'false');
        getStartedBtnNotCollapsedNav.hidden = false;

        // hide button in collapsed/toggled nav
        getStartedBtnCollapsedNav.setAttribute(getStartedBtnCollapsedNavAriaHidden, 'true');
        getStartedBtnCollapsedNav.hideen = true;

    }
}

const togglerBtn = document.querySelector('.custom-toggler')
togglerBtn.addEventListener('click', showHideNavGetStartedButton)
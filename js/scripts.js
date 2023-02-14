//
// Scripts
// 

// Lottie player

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // LottieAnim Hide function
    var LottieHide = function () {
        const LottieAnimation = document.body.querySelector('#arrowContainer');
        if (!LottieAnimation) {
            return;
        }
        if (window.scrollY < 200) {
            LottieAnimation.classList.remove('hide')
        } else {
            LottieAnimation.classList.add('hide')
        }

    };
    LottieHide();
    document.addEventListener('scroll', LottieHide);

    
/*
    // Lottie animation
    var lottieArrow = function (){
        const downArrow = document.body.querySelector('#arrowDown');
        if (!downArrow) {
            return;
        }
        if (window.scrollY === 0) {
            downArrow.classList.add('arrowAnim')
        } else {
            downArrow.classList.remove('arrowAnim')
        }
    }

    // Activate the animation
    lottieArrow();
    // Remove downArrow animation when page is scrolled
    document.addEventListener('scroll', lottieArrow)
*/
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
        new bootstrap.ScrollSpy(document.body, {
            target: '#arrowDown',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function sendEmail(){
    Email.send({
        SecureToken : "61b688ba-72fb-4a7d-98eb-785de8e2433f",
        To : 'mikko.lempinen96@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Organisation: " + document.getElementById("org").value 
            + "<br> Email: " + document.getElementById("email").value 
            + "<br> Message: " +document.getElementById("message").value
    }).then(
    message => alert(message)
    );
}
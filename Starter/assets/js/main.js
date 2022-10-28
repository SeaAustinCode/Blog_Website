// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element; // checking to make sure that an element exists
    throw new Error(`Something went wrong, make sure that ${selector} exists and is typed correctly`) // if it doesn't exist or if there is an error throw an error and display error message.
};

// console.log(selectElement('.footer')); // used this to test that the selector and error message are working properly

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated')
    } else {
        headerElement.classList.remove('activated')
    }
};
window.addEventListener('scroll', scrollHeader)

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon-btn');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const body = document.body; //defined element here to store body element 
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () { // Add light theme on click
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) { //if the body element currently has the class of light theme we want it to...
        localStorage.setItem('currentTheme', 'themeActive'); //set this theme in local storage ('keyname', 'value')
    } else {
        localStorage.removeItem('currentTheme'); //remove this item from local storage if the class is not present
    }
});
// Swiper
// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element; // checking to make sure that an element exists
    throw new Error(`Something went wrong, make sure that ${selector} exists and is typed correctly`) // if it doesn't exist or if there is an error throw an error and display error message.
};

// console.log(selectElement('.footer')); // used this to test that the selector and error message are working properly

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
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

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
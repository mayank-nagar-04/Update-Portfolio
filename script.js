document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.add('show');
        hamburgerMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        nav.classList.remove('show');
        hamburgerMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    });

    // Close the navigation menu when a link is clicked
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
            hamburgerMenu.style.display = 'block';
            closeMenu.style.display = 'none';
        });
    });
});

// Get the "return to top" button element
var returnToTopButton = document.getElementById('returnToTop');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add('active');
  } else {
    returnToTopButton.classList.remove('active');
  }
}

// Add event listeners
window.addEventListener('scroll', toggleReturnToTopButton);
returnToTopButton.addEventListener('click', scrollToTop);
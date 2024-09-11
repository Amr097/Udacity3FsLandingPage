/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const header = document.getElementById("header");
const navbar = document.getElementById("navbar__list");

const sections = {
  section1: document.getElementById("section1"),
  section2: document.getElementById("section2"),
  section3: document.getElementById("section3"),
  section4: document.getElementById("section4"),
  section5: document.getElementById("section5"),
};

let scrollTimeout;
let lastScrollTop = 0;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Add this function to show the navbar
function showNavbar() {
  header.style.transform = "translateY(0)";
  header.style.opacity = "1";
}

// Add this function to hide the navbar
function hideNavbar() {
  header.style.transform = "translateY(-100%)";
  header.style.opacity = "0";
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const navbarContent = `
            <li class="menu__link" onclick="scrollToView('')">Home</li>
            <li class="menu__link" id="link-section1" onclick="scrollToView('section1')">Section 1</li>
            <li class="menu__link" id="link-section2" onclick="scrollToView('section2')">Section 2</li>
            <li class="menu__link" id="link-section3" onclick="scrollToView('section3')">Section 3</li>
            <li class="menu__link" id="link-section4" onclick="scrollToView('section4')">Section 4</li>
            <li class="menu__link" id="link-section5" onclick="scrollToView('section5')">Section 5</li>
            `;
navbar.innerHTML = navbarContent;

// Add class 'active' to section when near top of viewport

// Function to remove active class from all nav links
function removeActiveClasses() {
  const navLinks = document.querySelectorAll(".menu__link");

  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the current section's nav link
function addActiveClass(id) {
  const currentNavLink = document.getElementById(`link-${id}`);

  if (currentNavLink) {
    currentNavLink.classList.add("active");
  } else {
    currentNavLink.classList.remove("active");
  }
}

// Scroll to anchor ID using scrollTO event
const scrollToView = (id) => {
  //Check if the target section exists
  const targetSection = document.getElementById(id);

  if (!targetSection) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    //Get target section bound rect
    const rect = sections[id].getBoundingClientRect();

    // Calculate the position relative to the entire document
    const scrollPosition = rect.top + window.scrollY;

    // Scroll to the section
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Listen for the scroll event
window.addEventListener("scroll", () => {
  // Show the navbar immediately when scrolling starts
  showNavbar();

  // Clear the previous timeout
  clearTimeout(scrollTimeout);

  // Set a new timeout
  scrollTimeout = setTimeout(() => {
    // Hide the navbar after 1.5 seconds of no scrolling
    hideNavbar();
  }, 1500);

  // Remove all active classes if the user is at the top of the page
  if (window.scrollY === 0) {
    removeActiveClasses();
    return;
  }
  // Loop through the sections object
  for (const key in sections) {
    if (sections.hasOwnProperty(key)) {
      const section = sections[key];
      const rect = section.getBoundingClientRect();
      // Check if the section is in view
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        removeActiveClasses();
        addActiveClass(section.id);
      }
    }
  }

  // Update last scroll position
  lastScrollTop = window.scrollY;
});

// Add some CSS to your navbar for smooth transitions
header.style.transition =
  "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";

// Ensure the navbar is visible on page load
showNavbar();

// Build menu

// Scroll to section on link click

// Set sections as active

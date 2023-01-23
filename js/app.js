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


const sections = document.getElementsByTagName("section");
const navigationBar = document.getElementById("navbar__list");


for (const section of sections) {
 const newListItem = document.createElement("li");
 const navigationName = section.getAttribute("data-nav");
 const navigationUrl = section.getAttribute("id");
 newListItem.innerHTML = "<a href='#"+navigationUrl+"'>"+navigationName+"</a>";
 navigationBar.appendChild(newListItem);
}





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



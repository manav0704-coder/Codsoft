const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const sidebarLinks = document.querySelectorAll('#sidebar .sidebar-content a');

const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeSidebar);
closeBtn.addEventListener('click', closeSidebar);

// Add event listeners to each sidebar link to close the sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});


// scroll bar js

// Function to show scrollbar
// Function to show scrollbar
function showScrollbar() {
    document.querySelector('.portfolio').classList.add('show-scroll');
}

// Function to hide scrollbar
function hideScrollbar() {
    document.querySelector('.portfolio').classList.remove('show-scroll');
}

// Add event listener to detect scrolling and show/hide scrollbar
document.querySelector('.portfolio').addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    showScrollbar();
    // Hide scrollbar after a certain delay (e.g., 2 seconds) if no further scrolling occurs
    var scrollTimeout = setTimeout(hideScrollbar, 2000);
});

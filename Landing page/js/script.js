// side bar js 

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById("menuIcon");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = sidebar.querySelectorAll("a");

    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add("active");
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove("active");
    }

    // Event listener for menu icon to open sidebar
    menuIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        openSidebar();
    });

    // Event listener for close button to close sidebar
    closeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        closeSidebar();
    });

    // Event listener for each link inside the sidebar to close sidebar on click and smooth scroll to target
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            closeSidebar();

            // Get the target element
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



// slider js


document.addEventListener('DOMContentLoaded', function() {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let slider = document.querySelector('.slider');
    let sliderList = document.querySelector('.slider .list');
    let thumbnail = document.querySelector('.thumbnail');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    // Initial thumbnails setup
    thumbnail.innerHTML = '';
    slider.querySelectorAll('.item').forEach((item, index) => {
        let thumb = thumbnailItems[index].cloneNode(true);
        thumbnail.appendChild(thumb);
    });

    // Function for next button
    nextBtn.onclick = function() {
        moveSlider('next');
    }

    // Function for prev button
    prevBtn.onclick = function() {
        moveSlider('prev');
    }

    function moveSlider(direction) {
        let sliderItems = slider.querySelectorAll('.item');
        let thumbnailItems = document.querySelectorAll('.thumbnail .item');

        if (direction === 'next') {
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
        } else {
            // Get the first item in the list
            let firstItem = sliderItems[0];
            // Move it to the end
            sliderList.appendChild(firstItem);
            // Move first thumbnail to the end
            thumbnail.appendChild(thumbnailItems[0]);
            // Update z-index of images to ensure correct stacking order
            sliderItems.forEach((item, index) => {
                item.style.zIndex = index + 1;
            });
            // Update z-index of thumbnails to match the images
            thumbnailItems.forEach((item, index) => {
                item.style.zIndex = index + 1;
            });
        }
    }

    // Adjust slider dimensions on window resize
    window.addEventListener('resize', function() {
        adjustSliderDimensions();
    });

    function adjustSliderDimensions() {
        let screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            slider.style.height = '70vh';
            sliderList.style.width = '100%';
            sliderList.style.height = '100%';
            thumbnail.style.bottom = '35%';
        } else {
            slider.style.width = '100vw';
            slider.style.height = '100vh';
            sliderList.style.width = '100%';
            sliderList.style.height = '100%';
            thumbnail.style.bottom = '50px';
        }
    }

    // Call adjustSliderDimensions initially
    adjustSliderDimensions();

});






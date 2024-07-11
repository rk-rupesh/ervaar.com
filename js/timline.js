// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all timeline entries
    const timelineEntries = document.querySelectorAll('.timeline-entry');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        timelineEntries.forEach(entry => {
            if (isInViewport(entry)) {
                entry.classList.add('animate'); // Add animation class
            } else {
                entry.classList.remove('animate'); // Remove animation class if out of view
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});

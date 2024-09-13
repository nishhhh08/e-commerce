// Image Slider
const thumbnails = document.querySelectorAll('.thumb');
const mainImg = document.getElementById('main-img');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
    });
});

// Quick View Popup
const quickView = document.getElementById('quick-view');
const closeBtn = document.querySelector('.close-btn');

// Function to open Quick View
function openQuickView() {
    quickView.style.display = 'flex';
}

// Close Quick View when close button is clicked
closeBtn.addEventListener('click', () => {
    quickView.style.display = 'none';
});

// Close Quick View when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === quickView) {
        quickView.style.display = 'none';
    }
});

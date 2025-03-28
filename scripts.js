// Function to open the clicked image in a modal
function openImage(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    
    // Set the image source for the modal
    modalImg.src = imageSrc;
    
    // Display the modal
    modal.style.display = 'block';
}

// Function to close the modal
function closeImage() {
    var modal = document.getElementById('modal');
    
    // Hide the modal
    modal.style.display = 'none';
}

// Close modal if clicking outside the image area
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

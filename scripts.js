// Function to open the clicked image in a modal
function openImage(image) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = image;
  }
  
  // Function to close the modal
  function closeImage() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  
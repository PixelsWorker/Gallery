function openImage(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    
    modalImg.src = imageSrc;
    
    modal.style.display = 'block';
}

function closeImage() {
    var modal = document.getElementById('modal');
    
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

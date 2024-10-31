const prev = document.getElementById('prev');
const next = document.getElementById('next');

let x = 0; // Initialize x to store rotation angle
const imageContainer = document.querySelector('.image-container'); // Assuming image-container is the ID of the container to rotate

// Event listener for previous button
document.getElementById('prev').addEventListener('click', () => {
    x = x + 45; // Decrement x by 45 degrees
    updateGallery();
});

document.getElementById('next').addEventListener('click', () => {
    x = x - 45; // Decrement x by 45 degrees
    updateGallery();
});

// Function to update gallery rotation
function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`; // Apply the rotation transform

    setTimeout(()=>{
       x= x-45;
       updateGallery();
    }, 10000);
};

updateGallery();
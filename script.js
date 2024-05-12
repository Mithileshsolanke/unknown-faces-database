// Assuming you have an array of objects representing unknown faces
const unknownFaces = [
    { name: "Mithilesh Solanke", imagePath: "mithilesh.jpg" },
    { name: "Ayush Gohatre", imagePath: "img2.jpg" },
    // Add more objects as needed
];

const facesContainer = document.getElementById("facesContainer");

// Function to create HTML elements for each unknown face
function renderFaces() {
    facesContainer.innerHTML = "";
    unknownFaces.forEach(face => {
        const faceCard = document.createElement("div");
        faceCard.classList.add("faceCard");

        const faceImage = document.createElement("img");
        faceImage.src = face.imagePath;
        faceImage.alt = face.name;
        faceImage.classList.add("faceImage");

        const faceName = document.createElement("p");
        faceName.textContent = face.name;

        faceCard.appendChild(faceImage);
        faceCard.appendChild(faceName);
        facesContainer.appendChild(faceCard);
    });
}

// Call the function to render faces when the page loads
window.addEventListener("load", renderFaces);

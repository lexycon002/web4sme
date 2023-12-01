const openIcon = document.getElementById('openBtn');
const closeIcon = document.getElementById('closeBtn');
const containerDom = document.querySelector('.nav-links');

openIcon.addEventListener("click", () => {
    containerDom.classList.add("showMenu");
});
closeIcon.addEventListener("click", () => {
    containerDom.classList.remove("showMenu");
});


// Function to update date
const dateUpdate = document.querySelector(".date");

const currentYear = new Date().getFullYear();
dateUpdate.textContent = currentYear;
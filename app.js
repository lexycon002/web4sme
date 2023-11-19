const openIcon = document.getElementById('openBtn');
const closeIcon = document.getElementById('closeBtn');
const containerDom = document.querySelector('.nav-links');

openIcon.addEventListener("click", () => {
    containerDom.classList.add("showMenu");
});
closeIcon.addEventListener("click", () => {
    containerDom.classList.remove("showMenu");
});

const chevronIcon = document.querySelector(".toggle-chevron");
const subMenus = document.querySelector(".sub-menus")

chevronIcon.addEventListener("click", ()=> {
    subMenus.style.display = "block";
});
chevronIcon.addEventListener("click", ()=> {
    subMenus.style.display = "none";
});
const toggleBtn = document.querySelector(".toggle-btn"),
    toggleBtnIcon = toggleBtn.querySelector("i");

const dropDownMenu = document.querySelectorAll(".drop-down-menu");

const sideBar = document.querySelector(".sideBar");

toggleBtn.addEventListener("click", () => {
    sideBar.classList.toggle("close");
    toggleBtnIcon.classList.toggle("rotate");


    dropDownMenu.forEach((v) => {
        if (sideBar.classList.contains("close")) {
            v.classList.remove("show")
        }
    })
    
})

const dropDownLink = document.querySelectorAll(".drop-down-link");

dropDownLink.forEach((element, index) => {

    element.addEventListener("click", () => {

        dropDownMenu.forEach((menu, menuIndex) => {
            if (menuIndex !== index) {
                menu.classList.remove("show");
            }
        });

        const selectedDropDownMenu = element.nextElementSibling;

        selectedDropDownMenu.classList.toggle("show");

    });

});
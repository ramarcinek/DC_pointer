let burgerMenu = document.querySelector(".burger-menu");
let dropDownMenu = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", function(){
	dropDownMenu.classList.toggle("open");
});

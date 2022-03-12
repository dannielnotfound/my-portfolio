console.log("step 1");
var hamburguer = document.querySelector(".hamburguer-menu");

hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");
});
let helms = document.querySelectorAll('.helm');
window.addEventListener("scroll", function() {
    for(let i of helms){
        i.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    }
});
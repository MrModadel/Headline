let helms = document.querySelectorAll('.helm');
window.addEventListener("scroll", function () {
    for (let i of helms) {
        i.style.transform = "rotate(-" + window.pageYOffset + "deg)";
    }
});
let but_menu = document.querySelector('.but-menu'),
 modal = document.querySelector('.modal'),
 close = document.querySelector('.close');
but_menu.onclick = () => {
    modal.style.transform = ' translateX(0%)'
}
close.onclick = () => {
    modal.style.transform = ' translateX(100%)'
}
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src ="images/sun.jpeg";
    } else{
        icon.src = "images/moon.png";
    }
}
var loader = document.getElementById("preloader");
window.addEventListener("load",function (){
    loader.style.display = "none"; 
})
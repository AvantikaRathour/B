let icon = document.getElementById("menu-button");
let text = document.getElementsByClassName("text-color");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
        text.classlist.toggle("text-color2");
    } else icon.src = "images/moon (3).png";
};

//# sourceMappingURL=index.672d4772.js.map

document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <nav>
        <div class="logo">
            <a href="index.html"><img src="img/logo.png" alt="Logo"></a>
        </div>
        <div id="menu-button">
            <img src="img/menu.png" alt="menu">
        </div>
        <div id="navbar">
            <div id="retour" onclick="closeMenu()">
                <img src="img/retour.png">
            </div>
            <ul>
                <li><a href="index.html">ACCUEIL</a></li>
                <li><a href="expertise.html">NOTRE EXPERTISE</a></li>
                <li><a href="projets.html">NOS PROJETS</a></li>
                <li><a href="contact.html">NOUS CONTACTER</a></li>
            </ul>
        </div>

        </nav>
    `;
    document.getElementById('menu').innerHTML = menuHTML;
});
document.addEventListener("DOMContentLoaded", function() { 
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    document.getElementById("menu-button").addEventListener("click", function () {
        openMenu();
    });

    document.getElementById("retour").addEventListener("click", function() {
        closeMenu();
    });


    var menus = document.getElementById("navbar");

    function openMenu() {
        menus.style.top = "0";
    }

    function closeMenu() {
        menus.style.top = "-100%";
    }
});
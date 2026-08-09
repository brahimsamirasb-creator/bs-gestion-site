```javascript
/* =========================================================
   BS GESTION - SCRIPT.JS
========================================================= */

function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (!nav) {
        return;
    }

    nav.classList.toggle("active");
}


/* Ferme le menu après avoir cliqué sur un lien */

document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("mainNav");

    if (!nav) {
        return;
    }

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

});
```

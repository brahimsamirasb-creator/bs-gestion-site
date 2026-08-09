```javascript
/* =========================================================
   BS GESTION — SCRIPT.JS
   MENU MOBILE
========================================================= */

(function () {
    "use strict";

    function toggleMenu() {
        const nav = document.getElementById("mainNav");
        const menu = document.querySelector(".menu");

        if (!nav) return;

        const isOpen = nav.classList.toggle("active");

        if (menu) {
            menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {

        const nav = document.getElementById("mainNav");
        const menu = document.querySelector(".menu");

        /* -----------------------------------------------------
           BOUTON MENU
        ----------------------------------------------------- */

        if (menu) {

            menu.setAttribute("aria-expanded", "false");

            menu.addEventListener("click", toggleMenu);

            menu.addEventListener("keydown", function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    toggleMenu();
                }

            });
        }


        /* -----------------------------------------------------
           FERMETURE DU MENU APRÈS CLIC SUR UN LIEN
        ----------------------------------------------------- */

        if (nav) {

            const links = nav.querySelectorAll("a");

            links.forEach(function (link) {

                link.addEventListener("click", function () {

                    nav.classList.remove("active");

                    if (menu) {
                        menu.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                });

            });
        }


        /* -----------------------------------------------------
           FERMETURE DU MENU EN CLIQUANT À L'EXTÉRIEUR
        ----------------------------------------------------- */

        document.addEventListener("click", function (event) {

            if (!nav || !menu) return;

            const clickedInsideMenu =
                menu.contains(event.target);

            const clickedInsideNav =
                nav.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedInsideNav &&
                nav.classList.contains("active")
            ) {
                nav.classList.remove("active");

                menu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });


        /* -----------------------------------------------------
           FERMETURE DU MENU AVEC ESC
        ----------------------------------------------------- */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                nav &&
                nav.classList.contains("active")
            ) {
                nav.classList.remove("active");

                if (menu) {
                    menu.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }

        });

    });

})();
```

```javascript
function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("#mainNav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            const nav = document.getElementById("mainNav");

            if (nav) {
                nav.classList.remove("active");
            }
        });
    });

});
```

/* =====================================================
   MOBILE NAVIGATION TOGGLE
===================================================== */

document.addEventListener("click", function (e) {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle menu saat icon menu diklik
    if (e.target === menuToggle) {
        navMenu.classList.toggle("active");
    }

    // Close menu jika klik link menu
    if (e.target.closest(".nav-menu a")) {
        navMenu.classList.remove("active");
    }
});


/* =====================================================
   SMOOTH SCROLL TO SECTION
===================================================== */

document.addEventListener("click", function (e) {
    if (e.target.matches('a[href^="#"]')) {
        const targetSelector = e.target.getAttribute("href");
        const target = document.querySelector(targetSelector);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
});


/* =====================================================
   LOAD HEADER & FOOTER READY CHECK
===================================================== */
/* 
   File header & footer sudah auto-load lewat HTML.
   Bagian ini memastikan script baru dijalankan setelah
   komponen selesai dimuat.
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("Main.js loaded successfully.");
});


/* =====================================================
   OPTIONAL: CLOSE MENU WHEN CLICK OUTSIDE (EXTRA UX)
===================================================== */

document.addEventListener("click", function (e) {
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navMenu || !menuToggle) return;

    if (!navMenu.contains(e.target) && e.target !== menuToggle) {
        navMenu.classList.remove("active");
    }
});

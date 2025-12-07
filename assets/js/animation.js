/* =====================================================
   TYPING EFFECT (Efek Mengetik)
   Dipakai di index.html pada <span class="typing"></span>
===================================================== */

const typingElement = document.querySelector(".typing");
const typingWords = ["Web Developer", "Designer", "Frontend Engineer", "Freelancer"];
let wordIndex = 0;
let letterIndex = 0;
let typingDelay = 120;
let eraseDelay = 80;
let nextWordDelay = 900;

function typeEffect() {
    if (!typingElement) return;

    if (letterIndex < typingWords[wordIndex].length) {
        typingElement.textContent += typingWords[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, typingDelay);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        typingElement.textContent = typingWords[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, eraseDelay);
    } else {
        wordIndex = (wordIndex + 1) % typingWords.length;
        setTimeout(typeEffect, nextWordDelay);
    }
}

typeEffect();



/* =====================================================
   SCROLL REVEAL ANIMATION
   Class yang didukung:
   fade-up, fade-left, fade-right, zoom-in
===================================================== */

const revealElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .zoom-in"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.25
    }
);

revealElements.forEach(el => revealObserver.observe(el));



/* =====================================================
   HOVER GLOW EFFECT (untuk skill-card)
   Memanfaatkan CSS variable --x dan --y
===================================================== */

document.querySelectorAll(".hover-glow").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

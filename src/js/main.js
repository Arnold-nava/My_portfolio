function objectDetect() {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

objectDetect();

function Typings() {
    const typingElement = document.querySelector(".typing");

    const words = [
        "Aspiring Web Developer",
        "Student Programmer",
        "Creative Learner"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

        if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 100);
    }

    typeEffect();
}

Typings()

function stopScroll() {
    const menuToggle = document.querySelector("#menu-toggle");

    menuToggle.addEventListener("change", () => {

        if (menuToggle.checked) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

    });
}
stopScroll()
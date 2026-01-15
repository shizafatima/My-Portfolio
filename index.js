// Hamburger

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


const words = ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"];
let i = 0; // current word index
let j = 0; // letter index
const typedSpan = document.getElementById("typing");

// Typing speed (ms per letter)
const typingSpeed = 150;
const deleteSpeed = 100;

function type() {
    const currentWord = words[i];

    if (j < currentWord.length) {
        typedSpan.textContent += currentWord[j];
        j++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteWord, 1000);
    }
}

// Delete letters
function deleteWord() {
    const currentWord = words[i];

    if (j > 0) {
        typedSpan.textContent = currentWord.substring(0, j - 1);
        j--;
        setTimeout(deleteWord, deleteSpeed);
    } else {
        // Word deleted → next word
        i = (i + 1) % words.length;
        setTimeout(type, 500);
    }
}

// Start typing
type();

// Skills section 
const roles = [
  "Web Developer",
  "Java Programmer",
  "Graphic Designer",
  "React Learner"
];

let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const typingText = document.querySelector('.typing-text');

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }

    typingText.textContent = currentRole;

    if (j === roles[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === roles.length) i = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}

document.addEventListener('DOMContentLoaded', type);

const toggle = document.getElementById('themeToggle');
const body = document.body;

// Load theme from local storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

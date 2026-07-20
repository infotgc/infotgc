const button = document.querySelector<HTMLButtonElement>(".header__toggle");
const nav = document.querySelector<HTMLElement>(".header__nav");

function openMenu() {
  nav?.classList.add("is-open");
  button?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  nav?.classList.remove("is-open");
  button?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (nav?.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

button?.addEventListener("click", toggleMenu);

document.querySelectorAll<HTMLAnchorElement>(".header__nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target as Node;

  if (
    nav?.classList.contains("is-open") &&
    !nav?.contains(target) &&
    !button?.contains(target)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
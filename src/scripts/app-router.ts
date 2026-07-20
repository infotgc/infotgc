const pageNames = [
  "hero",
  "services",
  "approche",
  "pourquoi-moi",
  "contact",
  "legal",
] as const;

type PageName = typeof pageNames[number];

const pages = [
  ...document.querySelectorAll<HTMLElement>("[data-page]"),
];

const links = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-link]"),
];

function showPage(pageName: PageName) {
  pages.forEach((page) => {
    page.classList.toggle(
      "is-active",
      page.dataset.page === pageName
    );
  });

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  });
}

function getCurrentPage(): PageName {
  const hash = window.location.hash.replace("#", "");

  if (pageNames.includes(hash as PageName)) {
    return hash as PageName;
  }

  return "hero";
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = link.dataset.link as PageName | undefined;

    if (!target) {
      return;
    }

    showPage(target);

    if (window.location.hash !== `#${target}`) {
      history.pushState(null, "", `#${target}`);
    }
  });
});

// Affichage initial
showPage(getCurrentPage());

// Gestion des boutons Précédent / Suivant du navigateur
window.addEventListener("popstate", () => {
  showPage(getCurrentPage());
});
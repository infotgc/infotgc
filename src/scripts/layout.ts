export function observeHeaderHeight() {
  const header = document.querySelector<HTMLElement>(".header");

  if (!header) return;

  let lastHeight = -1;

  const updateHeight = () => {
    const height = Math.round(header.getBoundingClientRect().height);

    if (height === lastHeight) return;

    lastHeight = height;

    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  };

  updateHeight();

  new ResizeObserver(updateHeight).observe(header);
}
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));

const copyButton = document.querySelector("#copy-profile");
const toast = document.querySelector(".toast");
let toastTimer;

copyButton?.addEventListener("click", async () => {
  const profileUrl = "https://www.linkedin.com/in/samiya-mansuri-7b7b04251/";
  try {
    await navigator.clipboard.writeText(profileUrl);
    if (toast) toast.textContent = "LinkedIn profile link copied!";
  } catch {
    if (toast) toast.textContent = profileUrl;
  }
  toast?.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast?.classList.remove("show"), 2600);
});

// Highlight the current navigation section while scrolling.
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a[href^='#']");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => {
          item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}

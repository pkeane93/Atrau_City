import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

const application = Application.start();

application.register("navbar", class extends Controller {
  static targets = ["hamburger", "drawer"];

  connect() {
    const path = window.location.pathname;

    // Active state — desktop links
    this.element.querySelectorAll("#navbar-links a h3").forEach(link => {
      const href = link.parentElement.getAttribute("href");
      if (path.endsWith(href)) {
        link.classList.remove("font-medium");
        link.classList.add("font-extrabold");
      }
    });

    // Active state — mobile drawer links
    this.drawerTarget.querySelectorAll("a").forEach(link => {
      const href = link.getAttribute("href");
      if (path.endsWith(href)) {
        link.classList.add("font-extrabold");
      }
    });
  }

  toggle(event) {
    event.stopPropagation();
    this.drawerTarget.classList.contains("hidden") ? this.open() : this.close();
  }

  open() {
    this.drawerTarget.classList.remove("hidden");
    const bars = this.hamburgerTarget.querySelectorAll("span");
    bars[0].style.transform = "translateY(8px) rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
  }

  close() {
    this.drawerTarget.classList.add("hidden");
    const bars = this.hamburgerTarget.querySelectorAll("span");
    bars[0].style.transform = "";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "";
  }

  closeOnOutside(event) {
    if (!this.element.contains(event.target)) {
      this.close();
    }
  }
});

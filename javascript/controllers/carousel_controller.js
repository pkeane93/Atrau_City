import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

const application = Application.start();

// Carousel controller
application.register("carousel", class extends Controller {
  static targets = ["main", "thumbnail"];

  updateMain() {
    const current = this.thumbnailTargets[this.index];

    //  1. Update main image
    this.mainTarget.src = current.src;

    // 2. Update selected thumbnail styling
    this.thumbnailTargets.forEach((selectedImg, i) => {
      if (i === this.index) {
        selectedImg.classList.add("opacity-100", "border-green-500");
        selectedImg.classList.remove("opacity-60", "hover:opacity-100");
      } else {
        selectedImg.classList.add("opacity-60");
        selectedImg.classList.remove("opacity-100", "border-green-500", "hover:opacity-100");
      }
    });
  }

  index = 0;

  thumbnailSelect(event) {
    this.index = this.thumbnailTargets.indexOf(event.currentTarget);
    console.log(this.index)
    this.updateMain();
  }

  next() {
    this.index = (this.index + 1) % this.thumbnailTargets.length;
    this.updateMain();
  }

  prev() {
    this.index = (this.index - 1 + this.thumbnailTargets.length) % this.thumbnailTargets.length;
    this.updateMain();
  }

});

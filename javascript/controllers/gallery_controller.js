import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

const application = Application.start();

// Example controller
application.register("gallery", class extends Controller {
  static targets= ["btn"]

  connect() {
    console.log("Hello world2")
  }

  selection(event) {
    this.btnTargets.forEach(btn => {
      btn.className = "px-5 py-2 rounded-xl text-green-900 font-medium text-sm cursor-pointer hover:bg-white hover:shadow transition";
    });

    event.currentTarget.className = "px-5 py-2 rounded-xl bg-green-900 text-white font-medium text-sm cursor-pointer shadow transition";

    updateImages()
  }

  updateImages() {

  }

});

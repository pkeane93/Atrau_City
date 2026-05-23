import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

const application = Application.start();

// gallery Controller
application.register("gallery", class extends Controller {
  static targets = ["btn", "display", "lightbox", "image", "dropdown", "dropdownBtn", "dropdownLabel", "dropdownChevron"]

  labels = {
    studio: "Studios",
    apt_two: "2-Bedroom Apartments",
    apt_three: "3-Bedroom Apartments",
    exterior: "Exterior & Amenities"
  }

  connect() {
    this.currentImages = []
    this.currentIndex = 0
    this.images = {
      studio: [
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713773/apt01living001_f0naxz.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713773/apt01living002_qi8ehb.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713700/apt01bedroom003_lvpi56.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713658/apt01living004_pao0fm.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713657/apt01living003_i3ypc4.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713657/apt01bedroom002_iuwdkz.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713657/apt01bedroom001_ycnjws.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048910/apt01plan001_eez7n0.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048910/apt01plan002_uehh8j.jpg"
      ],
      apt_two: [
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713833/apt02living004_hflv1a.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713833/apt02hallway002_vrueef.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713830/apt02living005_yugk8c.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713829/apt02living003_wnroiz.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713828/apt02living002_ddcfhn.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713826/apt02hallway001_hkhusq.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713825/apt02bedroom003_flobum.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713824/apt02bathroom002_xipfkq.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713824/apt02bedroom002_tpi9na.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713822/apt02bathroom003_qf2fmf.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713820/apt02bathroom001_o748gw.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713821/apt02bedroom001_affwwi.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048923/apt02plan003_eazivq.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048922/apt02plan002_om4p93.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048922/apt02plan001_iddakn.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048922/apt02plan004_bs4kfj.jpg"

      ],
      apt_three: [
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713883/apt03living004_niiobj.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713882/apt03living005_xpmwyg.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713879/apt03living001_gcxzkb.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713877/apt03living003_vlxwzd.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713876/apt03living002_s4a2us.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713874/apt03bedroom004_kan4x1.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713873/apt03bedroom005_iopzd9.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713871/apt03hallway001_w2wrd7.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713870/apt03bedroom008_kkngzz.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713868/apt03bedroom006_wks9vt.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713867/apt03bedroom001_viqaid.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713866/apt03bedroom002_p50eso.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713864/apt03bathroom001_t8oitj.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713864/apt03bedroom007_w10qyy.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713862/apt03bedroom003_y23a1o.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713861/apt03bathroom004_upnuc3.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713859/apt03bathroom003_hm1b1e.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048938/apt03plan007_hit7xs.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048938/apt03plan006_wajq6a.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048937/apt03plan004_syzdmf.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048937/apt03plan005_koqv7h.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048936/apt03plan003_p6hjjd.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048935/apt03plan002_surn87.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048934/apt03plan001_qw0erc.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1775048934/apt03plan008_ou0cxs.jpg"
      ],
      exterior: [
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713635/model001_ludp0l.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713633/model002_fepi5u.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713631/hallway008_rpqg4p.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713631/hallway004_pewthd.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713630/hallway002_ch3r5w.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713629/exterior006_shcmap.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713629/hallway003_bn7grb.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713629/exterior005_hiw5va.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713629/hallway001_q5e7rt.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713629/exterior003_ahlwm5.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713628/exterior001_j8n17z.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713628/exterior004_uopkos.jpg",
        "https://res.cloudinary.com/drt1grff2/image/upload/f_auto,q_auto/v1774713628/exterior002_jmcvul.jpg",

      ]
    }

    this.render("studio")
  }

  selection(event) {
    const type = event.currentTarget.dataset.type

    // Update desktop pill active state by matching type, not event.currentTarget
    this.btnTargets.forEach(btn => {
      btn.classList.remove("bg-green-900", "text-white", "shadow")
      btn.classList.add("text-green-900", "hover:bg-white", "hover:shadow")
      if (btn.dataset.type === type) {
        btn.classList.add("bg-green-900", "text-white", "shadow")
        btn.classList.remove("hover:bg-white", "hover:shadow")
      }
    })

    // Update mobile dropdown label and close it
    this.dropdownLabelTarget.textContent = this.labels[type]
    this.closeDropdownMenu()

    this.render(type)
  }

  toggleDropdown(event) {
    event.stopPropagation()
    this.dropdownTarget.classList.contains("hidden") ? this.openDropdownMenu() : this.closeDropdownMenu()
  }

  openDropdownMenu() {
    this.dropdownTarget.classList.remove("hidden")
    this.dropdownChevronTarget.style.transform = "rotate(180deg)"
  }

  closeDropdownMenu() {
    this.dropdownTarget.classList.add("hidden")
    this.dropdownChevronTarget.style.transform = ""
  }

  closeDropdown(event) {
    if (!this.element.contains(event.target)) {
      this.closeDropdownMenu()
    }
  }

  render(type) {
    const images = this.images[type] || []
    this.displayTarget.innerHTML = ""
    this.currentImages = images

    images.forEach((url, index) => {
      const div = document.createElement("div")
      div.className = "overflow-hidden rounded-xl cursor-pointer group"

      const img = document.createElement("img")
      img.src = url
      img.loading = "lazy"
      img.dataset.index = index
      img.className = "w-full h-64 object-cover transition duration-300 group-hover:scale-105"
      img.setAttribute("data-action", "click->gallery#open")

      div.appendChild(img)
      this.displayTarget.appendChild(div)
    })
  }

  // lightBox Method!
  open(event) {
    this.currentIndex = parseInt(event.currentTarget.dataset.index)
    this.show()
    this.lightboxTarget.classList.remove("hidden")
    this._keyHandler = (e) => {
      if (e.key === "ArrowRight") this.next()
      if (e.key === "ArrowLeft") this.prev()
      if (e.key === "Escape") this.close()
    }
    window.addEventListener("keydown", this._keyHandler)
  }

  show() {
    this.imageTarget.src = this.currentImages[this.currentIndex]
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.currentImages.length
    this.show()
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.currentImages.length) %
      this.currentImages.length
    this.show()
  }

  close() {
    this.lightboxTarget.classList.add("hidden")
    if (this._keyHandler) window.removeEventListener("keydown", this._keyHandler)
  }

  closeOnBackground(event) {
    if (event.target === this.lightboxTarget) this.close()
  }

});

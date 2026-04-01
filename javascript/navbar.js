fetch('/views/shared/sharedNavbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    const path = window.location.pathname;
    const links = document.querySelectorAll("#Navbar a h3")

    links.forEach( (link) => {
      link.classList.remove("font-extrabold");
      link.classList.add("font-medium");

      const href = link.parentElement.getAttribute("href");
      if (path.endsWith(href)) {
        link.classList.remove("font-medium");
        link.classList.add("font-extrabold");
      }
    })
});

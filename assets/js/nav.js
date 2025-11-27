document.addEventListener("DOMContentLoaded", () => {

  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) return;

  // ---------------------------------------------------------
  // 1. Inject VALID Dropotron menu HTML
  // ---------------------------------------------------------
  const navHTML = `
  <header id="header" class="alt">
      <nav id="nav">
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li>
                  <a href="#" class="icon solid fa-angle-down">Submenu</a>
                  <ul>
                        <li><a href="#">Option One</a></li>
                        <li><a href="#">Option Two</a></li>
                        <li><a href="#">Option Three</a></li>
                        <li><a href="#">Option Four</a></li>
                  </ul>
              </li>
              <li><a href="#">Sign Up</a></li>
          </ul>
      </nav>
  </div>
  `;

  placeholder.innerHTML = navHTML;

  // ---------------------------------------------------------
  // 2. Highlight current page in menu
  // ---------------------------------------------------------
  const current = window.location.pathname.split("/").pop() || "index.html";
  const links = placeholder.querySelectorAll("a[href]");

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // ---------------------------------------------------------
  // 3. Initialize Dropotron AFTER HTML has been injected
  // ---------------------------------------------------------
  // Dropotron requires the menu to exist in the DOM.
  // Assumes jQuery + jquery.dropotron.min.js are included in the page.
  if (window.jQuery && jQuery.fn.dropotron) {
    jQuery("#nav > ul").dropotron({
      offsetY: -10,          // adjust vertical position
      mode: "fade",          // fade / zoom / default
      expandMode: "hover",   // hover or click
      hideDelay: 200,
      alignment: "left"
    });
  } else {
    console.warn("Dropotron not found — check script includes.");
  }
});
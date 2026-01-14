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
              <li><a href="vision.html">Our Vision</a></li>
              <li><a href="research.html">Our Research</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="team.html">Meet the Team</a></li>
              <li><a href="contact.html">Contact Us</a></li>
          </ul>
      </nav>
  </div>
  `;

  placeholder.innerHTML = navHTML;

  const footHTML= `
    <ul class="copyright">
      <li class="left">Centre for Medical Informatics<br>Usher Institute<br>5-7 Little France Road<br>Edinburgh BioQuarter - Gate 3<br>Edinburgh EH16 4UX</li>
      <li class="right-group">
        <span class="funded">Funded by</span>
        <img src="images/wellcome-logo.jpg" alt="Wellcome" class="logo">
        [308485/Z/23/Z]
      </li>
    </ul>
  `;
  const target = document.getElementById("site-footer")
  if (target)
  {
    target.innerHTML = footHTML;
  }
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

  // 3. Rebuild the Alpha mobile menu panel
  if (window.jQuery) {
    // Dropotron
    if (jQuery.fn.dropotron) {
      jQuery("#nav > ul").dropotron({
        offsetY: -10,
        expandMode: "hover"
      });
    }
    // Alpha mobile nav panel
    if (jQuery.fn.panel) {
      jQuery('<div id="navPanel">' +
        '<nav>' + jQuery('#nav').navList() + '</nav>' +
      '</div>')
      .appendTo('body')
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        side: 'left'
      });

      // Add the mobile menu toggle button
      jQuery('<a href="#navPanel" class="navPanelToggle"></a>')
        .appendTo('#header');
    }
  }
});
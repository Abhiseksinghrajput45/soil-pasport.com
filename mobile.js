(function () {
  var header = document.querySelector("header.site");
  var nav = header && header.querySelector("nav");
  if (!nav) return;

  var btn = document.createElement("button");
  btn.className = "nav-toggle";
  btn.type = "button";
  btn.setAttribute("aria-label", "Menu");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "&#9776;";
  nav.parentNode.insertBefore(btn, nav);

  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.innerHTML = open ? "&#10005;" : "&#9776;";
  });

  // On phones: first tap opens a submenu, second tap follows the link
  nav.querySelectorAll(".has-sub > a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (!window.matchMedia("(max-width:1180px)").matches) return;
      var li = a.parentNode;
      if (!li.classList.contains("open")) {
        e.preventDefault();
        li.classList.add("open");
      }
    });
  });
})();

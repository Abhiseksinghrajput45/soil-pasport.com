(function () {
  try { if (localStorage.getItem("cookieChoice")) return; } catch (e) {}
  var bar = document.createElement("div");
  bar.className = "cookie";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Cookie notice");
  bar.innerHTML =
    '<p>We use cookies to improve your experience and understand how our site is used. See our <a href="privacy.html">Cookie &amp; Privacy information</a>.</p>' +
    '<div><button type="button" class="link" data-c="declined">Decline</button>' +
    '<button type="button" class="accept" data-c="accepted">Accept</button></div>';
  bar.addEventListener("click", function (e) {
    var c = e.target.dataset.c;
    if (!c) return;
    try { localStorage.setItem("cookieChoice", c); } catch (x) {}
    bar.remove();
  });
  document.body.appendChild(bar);
})();
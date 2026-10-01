(function () {
  "use strict";
  var ALLOWED_HOSTS = ["ksidgdb.github.io", "localhost", "127.0.0.1", ""];
  var HOME_URL = "https://ksidgdb.github.io/Void.bio/";

  function kill() {
    try { window.stop(); } catch (e) {}
    try { document.documentElement.innerHTML = ""; } catch (e) {}
  }

  if (ALLOWED_HOSTS.indexOf(location.hostname) === -1) {
    kill(); location.replace(HOME_URL); return;
  }

  if (window.top !== window.self) {
    kill(); try { window.top.location = HOME_URL; } catch (e) {} return;
  }

  if (navigator.webdriver) { kill(); return; }

  ["contextmenu", "copy", "cut", "dragstart", "selectstart"].forEach(function (t) {
    document.addEventListener(t, function (e) { e.preventDefault(); });
  });

  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase(), c = e.ctrlKey || e.metaKey;
    var blocked =
      e.key === "F12" ||
      (c && (k === "s" || k === "u" || k === "p")) ||
      (c && e.shiftKey && (k === "i" || k === "j" || k === "c" || k === "k")) ||
      (c && e.altKey && (k === "i" || k === "j" || k === "c"));
    if (blocked) { e.preventDefault(); e.stopPropagation(); return false; }
  }, true);

  var s = document.createElement("style");
  s.textContent =
    "html,body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}" +
    "img{-webkit-user-drag:none;user-drag:none;pointer-events:none}" +
    "@media print{html{display:none!important}}";
  document.head.appendChild(s);

  try {
    console.log("%cStop.", "font:700 32px sans-serif");
    console.log("This site is protected. Copying its design, code or media without permission is not allowed.");
  } catch (e) {}
})();
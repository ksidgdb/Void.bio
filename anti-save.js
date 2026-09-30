(function () {
  "use strict";

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener(
    "keydown",
    function (e) {
      var key = (e.key || "").toLowerCase();
      var ctrl = e.ctrlKey || e.metaKey;

      var blocked =
        e.key === "F12" ||
        (ctrl && (key === "s" || key === "u" || key === "p")) ||
        (ctrl && e.shiftKey && (key === "i" || key === "j" || key === "c"));

      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    true
  );

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  var style = document.createElement("style");
  style.textContent =
    "html,body{-webkit-user-select:none;user-select:none;}" +
    "img{-webkit-user-drag:none;user-drag:none;}";
  document.head.appendChild(style);
})();

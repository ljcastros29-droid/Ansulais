(function () {
  "use strict";

  var menuBtn = document.getElementById("menuBtn");
  var navOverlay = document.getElementById("navOverlay");
  var navClose = document.getElementById("navClose");
  var navLinks = navOverlay ? navOverlay.querySelectorAll("a") : [];

  var searchBtn = document.getElementById("searchBtn");
  var searchBar = document.getElementById("searchBar");
  var searchClose = document.getElementById("searchClose");
  var searchInput = document.getElementById("searchInput");
  var searchForm = document.getElementById("searchForm");

  function openNav() {
    navOverlay.classList.add("is-open");
    navOverlay.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    closeSearch();
  }

  function closeNav() {
    navOverlay.classList.remove("is-open");
    navOverlay.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  function openSearch() {
    searchBar.classList.add("is-open");
    searchBtn.setAttribute("aria-expanded", "true");
    closeNav();
    window.setTimeout(function () {
      searchInput.focus();
    }, 200);
  }

  function closeSearch() {
    searchBar.classList.remove("is-open");
    searchBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navOverlay.classList.contains("is-open") ? closeNav() : openNav();
    });
  }
  if (navClose) navClose.addEventListener("click", closeNav);
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      searchBar.classList.contains("is-open") ? closeSearch() : openSearch();
    });
  }
  if (searchClose) searchClose.addEventListener("click", closeSearch);
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // La búsqueda todavía no está conectada a un catálogo real.
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
      closeSearch();
    }
  });
})();

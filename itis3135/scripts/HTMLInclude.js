window.addEventListener("DOMContentLoaded", () => {
    includeHTML();
    setValidationLinks();
  });
  
  function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(async el => {
      const file = el.getAttribute("data-include");
      try {
        const res = await fetch(file);
        const text = await res.text();
        el.innerHTML = text;
      } catch (err) {
        console.error(`Could not load ${file}:`, err);
      }
    });
  }
  
  function setValidationLinks() {
    document.getElementById("validation_link_html").setAttribute("href",
      "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href",
      "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
  }
  
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments d'accordéon
    let accordions = document.querySelectorAll('.accordion');
  
    // Ajoutez un gestionnaire d'événements à chaque élément d'accordéon
    accordions.forEach(function (accordion) {
      let accordionBtn = accordion.querySelector('.accordion_btn');
      let accordionContent = accordion.querySelector('.accordion_content');
  
      accordionBtn.addEventListener("click", function () {
        if (accordionContent.classList.contains("active")) {
          accordionContent.classList.remove("active");
        } else {
          accordionContent.classList.add("active");
        }
      });
    });
  });

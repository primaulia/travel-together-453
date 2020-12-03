// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();

  const flightTab = document.querySelector("#flightTab")
  const accommodationTab = document.querySelector("#accommodationTab")
  const activityTab = document.querySelector("#activityTab")
  const pendingTab = document.querySelector("#pendingTab")
  const approvedTab = document.querySelector("#approvedTab")
  const bookedTab = document.querySelector("#bookedTab")

  const wipeCategoryActive = () => {
    flightTab.classList.remove("active");
    accommodationTab.classList.remove("active");
    activityTab.classList.remove("active");
  }

  const resetStatusActive = () => {
    pendingTab.checked = "false";
    approvedTab.checked = "false";
    bookedTab.checked = "false";
    pendingTab.checked = "true";
    approvedTab.checked = "true";
    bookedTab.checked = "true";
  }

  // if condition to prevent error on other pages
  if (flightTab) {
    flightTab.addEventListener("click", (event) => {
      wipeCategoryActive()
      resetStatusActive()
      event.currentTarget.classList.add("active");
    });

    accommodationTab.addEventListener("click", (event) => {
      wipeCategoryActive()
      resetStatusActive()
      event.currentTarget.classList.add("active");
    });

    activityTab.addEventListener("click", (event) => {
      wipeCategoryActive()
      resetStatusActive()
      event.currentTarget.classList.add("active");
    });
  }

});

import "controllers"

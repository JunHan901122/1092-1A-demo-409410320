"use strict";

$(document).ready(function () {
  var logo = document.querySelector('.nav--left__logo');
  logo.addEventListener(onclick, $(this).toggle());

  function navbarShadow() {
    if ($(this).onclick) {
      $(".navbar").css("box-shadow", "0 100rem 300rem #e8e8e8");
    } else {
      $(".navbar").css("box-shadow", "0 0");
    }
  }
});
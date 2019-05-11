"use strict";

// window.addEventListener("DOMContentLoaded", loadSVG);
window.addEventListener("DOMContentLoaded", init);

// let mySVG;
// function loadSVG() {
//   console.log("load SVG");

//   fetch("v2-01.svg")
//     .then(response => response.text())
//     .then(mySVG => {
//       // console.log("The SVG data is:");
//       // console.log(mySVG);

//       document
//         .querySelector("#svg_timeline")
//         .insertAdjacentHTML("afterbegin", mySVG);
//     });

// //   init();
//   mySVG.addEventListener("load", init);
// }

function init() {
  console.log("init");

  // selecter alle punkter
  document.querySelectorAll(".dot .cls-12").forEach(dot => {
    let dotId, dataId, singleId, infoId, aarId, procentId;
    // event-listener lytter efter mouseover på alle punkter i tidslinjen
    dot.addEventListener("mouseover", e => {
      // det "aktive" elements parents id gemmes i en variabel dotId
      dotId = e.target.parentElement.id;
      // selve tallet i id'et isoleres
      dataId = dotId.slice(3);
      /* tallet bruges til at "sammensætte" variabler, så man kan få fat i de elementer,
      der skal synliggøres, når eventlisteneren aktiveres */
      singleId = `#ford${dataId}`;
      infoId = `#salg${dataId}`;
      aarId = `#a${dataId}`;
      procentId = `#p${dataId}`;
      // funktionen visInfo kaldes med variablerne
      visInfo(singleId, infoId, aarId, procentId);
    });
    dot.addEventListener("mouseout", () => {
      skjulInfo(singleId, infoId, aarId, procentId);
    });
  });

  document
    .querySelector(".button")
    .addEventListener("click", tilfoejBegivenheder);

  document
    .querySelector(".button2")
    .addEventListener("click", fjernBegivenheder);
}

function visInfo(singleId, infoId, aarId, procentId) {
  console.log("vis info");
  document.querySelector(`${infoId}`).style.opacity = "1";

  setTimeout(function() {
    document.querySelector(`${aarId} .cls-19`).style.fill = "#F2EEEB";
    document.querySelector(`${aarId} .cls-19`).style.opacity = "0.2";
    document.querySelector(`${singleId}`).style.opacity = "1";
    document.querySelector(`${aarId} .cls-19`).style.fill = "#F2EEEB";
    document.querySelector(`${aarId} .cls-19`).style.opacity = "0.2";
  }, 200);
  setTimeout(function() {
    document.querySelector(`${procentId}`).style.opacity = "1";
  }, 400);
}

function skjulInfo(singleId, infoId, aarId, procentId) {
  console.log("skjul info");
  document.querySelector(`${singleId}`).style.opacity = "0";
  document.querySelector(`${infoId}`).style.opacity = "0";
  document.querySelector(`${procentId}`).style.opacity = "0";
  document.querySelector(`${aarId} .cls-19`).style.fill = "none";
}

function tilfoejBegivenheder() {
  console.log("tilfoejBegivenheder");

  document.querySelector("#svg1").style.opacity = "0";
  document.querySelector("#svg1").style.pointerEvents = "none";
  document.querySelector("#svg2").style.opacity = "1";
  document.querySelector("#svg3").style.opacity = "1";
  document.querySelector("#svg2").style.pointerEvents = "all";

  document.querySelector(".button").style.display = "none";
  document.querySelector(".button2").style.display = "block";
  let extraActiveId;
  document.querySelectorAll(".extra .cls-top").forEach(point => {
    let extraId;
    point.addEventListener("mouseover", e => {
      extraId = e.target.parentElement.id;
      extraActiveId = `#${extraId}a`;

      visExtraActive(extraActiveId);
    });
  });
  document.querySelectorAll(".extra_active .cls-topA").forEach(activePoint => {
    activePoint.addEventListener("mouseout", () => {
      skjulExtraActive(extraActiveId);
    });
  });
}

function fjernBegivenheder() {
  console.log("fjernBegivenheder");
  document.querySelector("#svg1").style.pointerEvents = "all";
  document.querySelector("#svg1").style.opacity = "1";
  document.querySelector("#svg2").style.opacity = "0";
  document.querySelector("#svg3").style.opacity = "0";
  document.querySelector("#svg2").style.pointerEvents = "none";

  document.querySelector(".button").style.display = "block";
  document.querySelector(".button2").style.display = "none";
}

function visExtraActive(extraActiveId) {
  console.log("visExtraActive");
  document.querySelector(`${extraActiveId}`).style.opacity = "1";
  document.querySelector(`${extraActiveId}`).style.pointerEvents = "all";
}

function skjulExtraActive(extraActiveId) {
  console.log("skjulExtraActive");
  document.querySelector(`${extraActiveId}`).style.opacity = "0";
  document.querySelector(`${extraActiveId}`).style.pointerEvents = "none";
}

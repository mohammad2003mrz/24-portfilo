"use strict";

const selectBtnSw = document.querySelector(".btn-sw-b");
const headerLight = document.querySelector("header");
const swRight = document.querySelector(".btn-sw-c");
const navLight = document.querySelector(".nav-f");
const logoText = document.querySelector(".logo-con");
const navLink = document.querySelector(".nav-list");
const headingPrimaryText = document.querySelector(".heading-primary");
const headingSecondaryText = document.querySelector(".heading-secondary");
const headingSecondaryId1 = document.getElementById("heading-secondary-1");
const headingSecondaryId2 = document.getElementById("heading-secondary-2");
const headingSecondaryId3 = document.getElementById("heading-secondary-3");
const disSecondaryId1 = document.getElementById("dis-secondary-1");
const disSecondaryId2 = document.getElementById("dis-secondary-2");
const disSecondaryId3 = document.getElementById("dis-secondary-3");
const headingTertiaryText = document.querySelector(".heading-tertiary");
const headingH3 = document.getElementById("heading-tertiary");
const headingTertiaryTextId1 = document.getElementById("h3-1");
const headingTertiaryTextId2 = document.getElementById("h3-2");
const headingTertiaryTextId3 = document.getElementById("h3-3");
const disMe = document.querySelector(".dis-me-box");
const disText = document.querySelector(".dis");
const btnLight = document.querySelector(".btn");
const mainLight = document.querySelector("main");
const mouseLight = document.querySelector(".mouse");
const btnSw = document.getElementById("btn-sw");
const currentTime = document.querySelector(".current-time");

selectBtnSw.addEventListener("click", function () {
  headerLight.classList.toggle("header-light");
  document.querySelector(".btn-sw-c").style.left = "24%";
  swRight.classList.toggle("active");
  navLight.classList.toggle("nav-f-light");
  logoText.classList.toggle("logo-con-light");
  navLink.classList.toggle("nav-link-light");
  headingPrimaryText.classList.toggle("heading-primary-light");
  headingSecondaryText.classList.toggle("heading-secondary-light");
  headingSecondaryId1.classList.toggle("heading-secondary-box-light");
  headingSecondaryId2.classList.toggle("heading-secondary-box-light");
  headingSecondaryId3.classList.toggle("heading-secondary-box-light");
  headingTertiaryText.classList.toggle("heading-tertiary-light");
  headingTertiaryTextId1.classList.toggle("ali-light");
  headingTertiaryTextId2.classList.toggle("ali-light");
  headingTertiaryTextId3.classList.toggle("ali-light");
  headingH3.classList.toggle("heading-tertiary-light");
  disSecondaryId1.classList.toggle("dis-secondary-light");
  disSecondaryId2.classList.toggle("dis-secondary-light");
  disSecondaryId3.classList.toggle("dis-secondary-light");
  disMe.classList.toggle("dis-box-light");
  disText.classList.toggle("dis-light");
  btnLight.classList.toggle("btn-light");
  mainLight.classList.toggle("main-light");
  mouseLight.classList.toggle("mouse-light");
  btnSw.classList.toggle("btn-sw-light");
  currentTime.classList.toggle("current-time-light");
});

function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  document.querySelector(".current-time").textContent = currentTime;
}

setInterval(updateTime, 1000);

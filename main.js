// Script to toggle the sidebar menu from left to right, based on buttons

var centered = document.getElementById("centered");
var right = document.getElementById("sidebar-right-toggle");
var left = document.getElementById("sidebar-left-toggle");


right.addEventListener("click", function () {
    centered.style="order: 2" }
)


left.addEventListener("click", function () {
    centered.style="order: 0" }
)
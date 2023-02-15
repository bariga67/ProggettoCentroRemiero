var currentLocation = location.href;
var navLinks = document.querySelectorAll("nav a");
var linkLength = navLinks.length;
for (var i = 0; i < linkLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = "active";
  }
}


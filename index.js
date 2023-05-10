var currentLocation = location.href;
var navLinks = document.querySelectorAll("nav a");
var linkLength = navLinks.length;
for (var i = 0; i < linkLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = "active";
  }
}
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');

if (document.cookie.indexOf('cookie_accepted=true') === -1) {
  cookieBanner.classList.remove('hidden');
}

acceptCookies.addEventListener('click', function() {
  document.cookie = 'cookie_accepted=true';
  cookieBanner.classList.add('hidden');
});

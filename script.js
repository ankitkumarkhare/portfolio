// Add event listener to adjust navigation bar on scroll
window.addEventListener("scroll", function() {
  var navBar = document.querySelector("header nav");
  if (window.pageYOffset > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

// Add event listener to toggle menu on small screens
var menuBtn = document.querySelector(".menu-btn");
var navLinks = document.querySelector("header nav ul");

//menuBtn.addEventListener("click", function() {
 // navLinks.classList.toggle("show");
// });

// Add event listener to smooth scroll to sections
var navLinks = document.querySelectorAll("header nav ul li a");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var target = this.getAttribute("href");
    var targetPos = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: targetPos,
      behavior: "smooth"
    });
    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
}

// Add event listener to highlight nav links on scroll
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop - 50;
    var sectionBottom = sectionTop + section.offsetHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
      var sectionId = section.getAttribute("id");
      navLinks.forEach(function(link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  }
});

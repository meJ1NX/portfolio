// ── Active nav link ──────────────────────────────────────
var current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-center a, .mobile-menu a").forEach(function(a) {
  if (a.getAttribute("href") === current) a.classList.add("active");
});

// ── Hamburger ─────────────────────────────────────────────
var ham = document.querySelector(".hamburger");
var mob = document.querySelector(".mobile-menu");
if (ham) {
  ham.addEventListener("click", function() { mob.classList.toggle("open"); });
  mob.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() { mob.classList.remove("open"); });
  });
}

// ── Skill bars ────────────────────────────────────────────
var bars = document.querySelectorAll(".skill-fill");
if (bars.length) {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute("data-width") + "%";
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function(b) { obs.observe(b); });
}

// ── Contact form validation ────────────────────────────────
var form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var valid = true;
    var name  = document.getElementById("name");
    var email = document.getElementById("email");
    var msg   = document.getElementById("message");
    var ng = document.getElementById("nameGroup");
    var eg = document.getElementById("emailGroup");
    var mg = document.getElementById("msgGroup");
    if (name.value.trim() === "") {
      ng.classList.add("error"); document.getElementById("nameError").textContent = "Please enter your name."; valid = false;
    } else { ng.classList.remove("error"); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      eg.classList.add("error"); document.getElementById("emailError").textContent = "Enter a valid email."; valid = false;
    } else { eg.classList.remove("error"); }
    if (msg.value.trim().length < 10) {
      mg.classList.add("error"); document.getElementById("msgError").textContent = "Message must be at least 10 characters."; valid = false;
    } else { mg.classList.remove("error"); }
    if (valid) { document.getElementById("successMsg").style.display = "block"; form.reset(); }
  });
}

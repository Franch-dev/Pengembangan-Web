// hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// auto close menu ketika klik link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


document.getElementById("wa-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // ambil nilai dari input
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phone = "6281290364313"; 

  // format pesan
  let text = `Halo, saya ${name}%0AEmail: ${email}%0A%0A${message}`;

  // buka wa.me link
  let url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
});

  
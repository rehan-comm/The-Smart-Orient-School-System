// Navbar COde 
const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });




    function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "923324158722"; // yahan apna number dalo (92 se start)

  var text =
    "New Contact Form Submission:%0A%0A" +
    "Name: " + name + "%0A" +
    "Email: " + email + "%0A" +
    "Phone: " + phone + "%0A" +
    "Message: " + message;

  var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
  window.open(url, "_blank");
}
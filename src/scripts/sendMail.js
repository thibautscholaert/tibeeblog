import emailjs from "@emailjs/browser";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_dwwv50c", "template_hag5ix3", form, "drMX4-RJeLIeZStQ1")
        .then(() => {
          alert("Message envoyé !");
          form.reset();
        })
        .catch((error) => {
          alert("Erreur : " + error.text);
        });
    });
  }
});

// Sélectionner le formulaire
const form = document.querySelector("form");

// Écouter l'événement de soumission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêcher l'envoi par défaut

  // Récupérer les valeurs des champs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Vérifier si tous les champs obligatoires sont remplis
  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs obligatoires !");
    return;
  }

  // Valider l'email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Veuillez entrer une adresse email valide !");
    return;
  }

  // Valider le téléphone (optionnel)
  if (phone && !/^\+?[0-9\s\-]+$/.test(phone)) {
    alert("Veuillez entrer un numéro de téléphone valide !");
    return;
  }

  // Afficher un message de confirmation
  alert("Merci pour votre message, " + name + "! Nous vous répondrons bientôt.");

  // Réinitialiser le formulaire
  form.reset();
});

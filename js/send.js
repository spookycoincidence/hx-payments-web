
document.getElementById("send-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const recipient = document.getElementById("recipient").value;
    const amount = document.getElementById("amount").value;
    const message = document.getElementById("message");
  
    if (recipient && amount > 0) {
      // Simulación de envío exitoso
      message.textContent = `✅ Enviados $${amount} a ${recipient}`;
      message.style.color = "lightgreen";
      this.reset();
    } else {
      message.textContent = "❌ Por favor, completá todos los campos correctamente.";
      message.style.color = "salmon";
    }
  });
  
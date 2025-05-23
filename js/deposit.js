
document.getElementById("deposit-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const amount = document.getElementById("depositAmount").value;
    const message = document.getElementById("depositMessage");
  
    if (amount > 0) {
      // Simulación de depósito
      message.textContent = `✅ Se depositaron $${amount} exitosamente.`;
      message.style.color = "lightgreen";
      this.reset();
    } else {
      message.textContent = "❌ El monto debe ser mayor a cero.";
      message.style.color = "salmon";
    }
  });
  
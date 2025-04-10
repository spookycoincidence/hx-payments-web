
// Datos que el backend devuelve
const fakeUser = {
    email: localStorage.getItem("email") || "usuario@falso.com",
    balance: 17250,
    movements: [
      { type: "Ingreso", amount: 5000, date: "2025-04-01" },
      { type: "Egreso", amount: 2500, date: "2025-04-03" },
      { type: "Ingreso", amount: 10000, date: "2025-04-05" },
    ],
  };
  
  // Mostrar email
  document.getElementById("userEmail").textContent = fakeUser.email;
  
  // Mostrar saldo
  document.getElementById("balance").textContent = `$${fakeUser.balance}`;
  
  // Renderizar movimientos
  const movementsList = document.getElementById("movementsList");
  fakeUser.movements.forEach((mov) => {
    const li = document.createElement("li");
    li.textContent = `${mov.date} - ${mov.type} - $${mov.amount}`;
    movementsList.appendChild(li);
  });
  
  // Logout (simulado)
  function logout() {
    localStorage.clear();
    window.location.href = "index.html";
  }
  
  
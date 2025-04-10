document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', email); // opcional
      window.location.href = 'dashboard.html';
    } catch (err) {
      alert(err.message);
    }
  });
  
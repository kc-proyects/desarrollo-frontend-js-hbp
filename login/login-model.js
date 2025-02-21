export async function loginUser(email, password){

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      password
    }),
    headers: {
      "Content-type": "application/json"  
    }
  });

  if (!response.ok) {
    throw new Error("Error al intentar iniciar sesión. Por favor, revisa si has introducido las credenciales correctamente.")
  }
  
  const { accessToken } = await response.json();

  return accessToken;
}

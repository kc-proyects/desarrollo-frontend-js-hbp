export async function getCurrentUserInfo() {
    const token = localStorage.getItem('jwt');

    let user = null;

    if (token) {
        try {
            const response = await fetch(`http://localhost:8000/auth/me`, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
        
            if (!response.ok) {
                throw new Error("Usuario no existente");
            }

            user = await response.json();

        } catch (error) {
            throw new Error(error.message)
        }

    }

    return user;
  
}

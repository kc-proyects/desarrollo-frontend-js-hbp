export async function createAd(ad) {
  const token = localStorage.getItem('jwt');

  const response = await fetch("http://localhost:8000/api/ads", {
    method: "POST",
    body: JSON.stringify({ ...ad }),
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Error creando anuncio")
  }


}

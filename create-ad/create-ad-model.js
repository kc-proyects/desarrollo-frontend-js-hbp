export async function createAd(img, title, description) {
  const token = localStorage.getItem('jwt');

  const response = await fetch("http://localhost:8000/api/ads", {
    method: "POST",
    body: JSON.stringify({
      img: img,
      title: title,
      description: description
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error("Error creando anuncio")
  }


}

# desarrollo-frontend-js-hbp

Comentario de reentrega:

Los 3 errores que Eduardo Aguilar me indicó fueron los siguientes:


- No puedo acceder al detalle siendo un usuario no identificado. La línea 9 de ad-detail-controller está intentando obtener los datos del usuario que ha iniciado sesión. Al no haber iniciado sesión, no mandas el token en la petición, ésta da un 401 y el catch del controlador está redireccionando a la home, lo cual es incorrecto puesto que un usuario no identificado debe poder acceder al detalle de un anuncio.
- Cuando hago login erróneo no informas al usuario del error.
- En el formulario de registro, si introduzco contraseñas diferentes, no notificas al usuario del error.

Los tres han sido subsanados. 

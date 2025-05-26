const axios = require('axios');

axios.get('https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json')
  .then(response => {
    console.log("Registros recibidos:");
    console.log(response.data);
  })
  .catch(error => {
    console.error("Hubo un error al hacer el GET:", error);
  });
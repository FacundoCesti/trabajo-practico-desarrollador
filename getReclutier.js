const axios = require('axios');

const URL = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

async function getReclutier() {
  try {
    const response = await axios.get(URL);
    const data = response.data;

    console.log('📋 Registros encontrados:\n');

    if (data) {
      Object.entries(data).forEach(([key, value], index) => {
        console.log(`Registro ${index + 1}:`);
        console.log(value);
        console.log('----------------------------');
      });
    } else {
      console.log('No se encontraron registros.');
    }
  } catch (error) {
    console.error('❌ Error al hacer el GET:', error.message);
  }
}

getReclutier();

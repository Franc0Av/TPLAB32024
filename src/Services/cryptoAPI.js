import axios from 'axios';

const BASE_URL = 'https://criptoya.com/api/ripio';

export async function fetchCryptoData(crypto, currency, amount = 0.1) {
  try {
    const url = `${BASE_URL}/${crypto}/${currency}/${amount}`;
    const response = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response.data

  } catch (error) {
    console.error('Error al consultar la API:', error.message);
  }
}
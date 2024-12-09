import axios from 'axios';

const instance = axios.create({
    baseURL:'https://laboratorio3-f36a.restdb.io/rest/transactions',
    headers: {
        'x-apikey': '60eb09146661365596af552f',
        'Content-Type': 'application/json'
    }
})

export async function buyCrypto(body) {
    
    if (!body || typeof body !== 'object') {
        console.error('El cuerpo de la solicitud es inválido:', body);
        return { success: false, message: 'Cuerpo inválido' };
    }

    try {
        const response = await instance.post('', body);
        return response.data;

    } catch (error) {
        console.error('Error al consultar la API:', error.message, error.response?.data);
        return { success: false, message: error.message };
    }
}
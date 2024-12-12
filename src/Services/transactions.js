import axios from 'axios';

//const url = 'https://laboratorio3-f36a.restdb.io/rest/transactions'

const instance = axios.create({
    baseURL:'https://laboratorio3-f36a.restdb.io/rest/transactions',
    headers: {
        'x-apikey': '60eb09146661365596af552f',
        'Content-Type': 'application/json'
    }
})

export async function addTransaction(body) {
    
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

export async function getTransactions(idUser){
    
    if(idUser === null){
        console.error('El id no puede ser nulo')
    }

    try{
        //const query = `?q={"user_id":"${idUser}"}`;
        const params = { q: JSON.stringify({ user_id: idUser }) };
        const response = await instance.get('', {params});
        return response.data;
    } catch  (error) {
        console.error('Error al consultar la API:', error.message, error.response?.data);
        return { success: false, message: error.message };
    }
}
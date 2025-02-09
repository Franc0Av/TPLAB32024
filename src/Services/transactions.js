import axios from 'axios';

const instance = axios.create({
    //baseURL:'/api/rest/transactions',
    // baseURL:'https://laboratorio3-f36a.restdb.io/rest/transactions',
    baseURL: 'https://labor3-d60e.restdb.io/rest/transactions',
    headers: {
        // 'x-apikey': '60eb09146661365596af552f',
        'x-apikey': '64a2e9bc86d8c525a3ed8f63',
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
        return {data: response.data, success: true};

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
        const params = { q: JSON.stringify({ user_id: idUser }) };
        const response = await instance.get('', {params});
        return {data: response.data, success: true};
    } catch  (error) {
        console.error('Error al consultar la API:', error.message, error.response?.data);
        return { success: false, message: error.message };
    }
}
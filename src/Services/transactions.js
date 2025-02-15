import axios from 'axios';
import { fetchCryptoData } from './cryptoAPI';

const instance = axios.create({
    baseURL: 'https://labor3-d60e.restdb.io/rest/transactions',
    headers: {
        'x-apikey': '64a2e9bc86d8c525a3ed8f63',
        'Content-Type': 'application/json'
    }
})

export async function addTransaction(body) {
    debugger
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

export async function updateTransaction(idTransaction, body) {
    debugger
    if (!body || typeof body !== 'object') {
        console.error('El cuerpo de la solicitud es inválido:', body);
        return { success: false, message: 'Cuerpo inválido' };
    }

    if(!idTransaction){
        console.error('El id es nulo');
        return { success: false, message: 'Id no puede ser nulo' };
    }

    try {
        const response = await instance.patch(`/${idTransaction}`, body);
        return {data: response.data, success: true};

    } catch (error) {
        console.error('Error al consultar la API:', error.message, error.response?.data);
        return { success: false, message: error.message };
    }
}

export async function deleteTransaction(idTransaction) {
    debugger
    if(idTransaction === null){
        console.error('El id es nulo');
        return { success: false, message: 'Id no puede ser nulo' };
    }

    try {
        const response = await instance.delete(`/${idTransaction}`);
        return {data: response, success: true};

    } catch (error) {
        console.error('Error al consultar la API:', error.message, error.response);
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

export async function calculateTotalsByCoin(idUser) {
    
    try{

        var cryptoList = ['btc', 'usdt', 'dai', 'eth'];
        const userData = await getTransactions(idUser)

        if (!userData || !Array.isArray(userData.data)) {
            console.warn('La respuesta no contiene un arreglo válido en la propiedad "data"');
            return {};
        }

        const totalsByCoin = {};

        for (const crypto of cryptoList) {
            const { totalPurchasesAmount, totalSalesAmount } = userData.data.reduce(
                (totals, { crypto_code, action, crypto_amount }) => {
                    if (crypto_code === crypto) {
                        const amount = parseFloat(crypto_amount || 0);
                        if (action === 'purchase') totals.totalPurchasesAmount += amount;
                        if (action === 'sale') totals.totalSalesAmount += amount;
                    }
                    return totals;
                },
                { totalPurchasesAmount: 0, totalSalesAmount: 0 }
            );

            const totalAvailable = totalPurchasesAmount - totalSalesAmount;
            const priceData = await fetchCryptoData(crypto, 'ARS');
            const priceARS = priceData?.totalBid || 0;
            const totalValueARS = (totalAvailable * priceARS).toFixed(2);

            if (totalAvailable > 0 || totalValueARS > 0) {
                totalsByCoin[crypto] = {
                    totalAvailable: totalAvailable,
                    totalValueARS: totalValueARS
                };
            }
        }

        return totalsByCoin;

    }catch (error)
    {
        console.error('Error calculando los totales:', error);
        return 0;
    }
}
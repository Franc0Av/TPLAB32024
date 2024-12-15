import { fetchCryptoData } from '../../Services/cryptoAPI'
import { getTransactions } from '@/Services/transactions';

export async function calculateAmount(amount, crypto){
    
    let data = await fetchCryptoData(crypto, 'ARS')

    return (data.totalAsk * amount).toFixed(2)
}

export async function formatCryptoCoin(crypto){

    const mapping = {
        bitcoin: 'btc',
        ethereum: 'eth',
        usdt: 'usdt',
        dai: 'dai'
    };

    return mapping[crypto.toLowerCase()] || crypto;
}

export async function calculateTotals(idUser, crypto) {
    
    try{
    
        const userData = await getTransactions(idUser)

        if (!userData || !Array.isArray(userData.data)) {
            console.log('La respuesta no contiene un arreglo válido en la propiedad "data"');
        }

        const totalAmount = userData.data
                .filter(ud => ud.crypto_code === crypto)
                .reduce((sum, ud) => sum + ud.crypto_amount, 0);

        console.log(totalAmount)
        return totalAmount
    }catch (error)
    {
        console.error('Error calculando los totales:', error);
    }
}
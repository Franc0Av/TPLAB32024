import { fetchCryptoData } from '../../Services/cryptoAPI'

export async function calculateAmount(amount, crypto){
    
    let data = await fetchCryptoData(crypto, 'ARS')

    return (data.totalAsk * amount).toFixed(2)
}

export async function validateData(amount, price, crypto){
    
    if (!crypto || !amount || !price) {
        console.error('Faltan datos para realizar la transacción');
        return;
    }
}
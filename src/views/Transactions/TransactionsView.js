import { fetchCryptoData } from '../../Services/cryptoAPI'
import { getTransactions } from '@/Services/transactions';

export async function calculateAmount(amount, crypto, action){
    
    let data = await fetchCryptoData(crypto, 'ARS')

    if(action.toLowerCase() === 'compra')
    {
        return (data.totalAsk * amount).toFixed(2);
    }
    else if(action.toLowerCase() === 'venta')
    {
        return (data.totalBid * amount).toFixed(2);
    }

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
            console.warn('La respuesta no contiene un arreglo válido en la propiedad "data"');
            return 0;
        }

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

        console.log(totalAvailable)

        return totalAvailable

    }catch (error)
    {
        console.error('Error calculando los totales:', error);
        return 0;
    }
}
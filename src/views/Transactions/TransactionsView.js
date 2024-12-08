import { fetchCryptoData } from '../../Services/cryptoAPI'

export async function calculateAmount(amount, crypto){
    
    let data = await fetchCryptoData(crypto, 'ARS')

    return data.ask * amount
}
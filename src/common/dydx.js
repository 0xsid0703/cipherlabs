import {DydxClient} from '@dydxprotocol/v3-client';
import Web3 from 'web3';
import {dydx_env} from '../env';

export const HTTP_HOST = dydx_env.API_URL;

export const web3 = new Web3 (dydx_env.RPC_URL);
export const client = new DydxClient (HTTP_HOST, {
  starkPrivateKey: dydx_env.STARK_PRIVATE_KEY,
  web3: web3,
  apiKeyCredentials: {
    key: dydx_env.STARK_API_KEY,
    passphrase: dydx_env.STARK_PASS_PHRASE,
    secret: dydx_env.STARK_SECRET_KEY,
  },
});

export const getCoins = async () => {
  try {
    const data = await client.public.getMarkets ();
    console.log ('All Token: ', {data});
    let tmpCoins = Object.keys (data.markets).map (key => data['markets'][key]);
    tmpCoins.sort ((a, b) => {
      if (Number (a['volume24H']) < Number (b['volume24H'])) return 1;
      else return -1;
    });
    tmpCoins = tmpCoins.filter (m => {
      if (m['baseAsset'] !== 'LUNA') return true;
      return false;
    });
    return tmpCoins;
    //   return tmpCoins.map((coin) => {
    //     return {
    //       key: coin["market"],
    //       value: coin["baseAsset"],
    //     };
    //   })
  } catch (e) {
    console.log ('getCoins ===> ', e);
    return [];
  }
};

import {createVertexClient} from '@vertex-protocol/client';
import {JsonRpcProvider, Wallet} from 'ethers';
import {vertex_env} from '../env';
import {CandlestickPeriod} from '@vertex-protocol/indexer-client';
import {BigDecimal, toPrintableObject} from '@vertex-protocol/utils';
import {removeDecimals} from '@vertex-protocol/utils';

export function getWallet () {
  return new Wallet (
    vertex_env.PRIVATE_KEY, // input PK here
    new JsonRpcProvider (vertex_env.RPC_URL, {
      name: 'arbitrum-one',
      chainId: 42161,
    })
  );
}
export async function getVertexClient () {
  const signer = getWallet ();
  return createVertexClient ('arbitrum', {
    signerOrProvider: signer,
  });
}
export function prettyPrintJson (label, json) {
  console.log (label);
  console.log (JSON.stringify (toPrintableObject (json), null, 2));
}
function waitForOneSecond () {
  return new Promise (resolve => setTimeout (resolve, 1000));
}
export async function getCandleData (productId, period, limit) {
  const vertexClient = await getVertexClient ();
  console.log ('H:', productId, period, limit);
  await waitForOneSecond ();
  const candlesticks = await vertexClient.market.getCandlesticks ({
    productId: productId,
    period: period,
    limit: limit,
  });
  return candlesticks;
}

export async function getCoins () {
  const vertexClient = await getVertexClient ();
  const spotSymbols = await vertexClient.context.engineClient.getSymbols ({});
  const dd = await vertexClient.market.getCandlesticks ({
    productId: 41,
    period: CandlestickPeriod.DAY,
    limit: 24,
  });
  let tmpCoins = Object.keys (spotSymbols.symbols).map (
    key => spotSymbols['symbols'][key]
  );

  console.log ({tmpCoins});
  return tmpCoins;
}

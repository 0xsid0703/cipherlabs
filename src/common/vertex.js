import {createVertexClient} from '@vertex-protocol/client';
import {JsonRpcProvider, Wallet} from 'ethers';
import {vertex_env} from '../env';
import {BigDecimal, toPrintableObject} from '@vertex-protocol/utils';

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

export async function getCoins () {
  console.log ('Hello world1');
  const vertexClient = await getVertexClient ();
  console.log ('Hello world2');
  const allMarkets = await vertexClient.market.getAllEngineMarkets ();
  console.log ('Hello world3');
  prettyPrintJson ('All Markets', allMarkets);
  const spotSymbols = await vertexClient.context.engineClient.getSymbols ({
    productType: 0,
  });

  console.log ({spotSymbols});
  return allMarkets;
}

import { BlockchainFactory } from "./blockchain-factory";

export async function getAddressBalance(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAddressBalance(address);
}
import { BlockchainFactory } from "./blockchain-factory";

export async function getAddressBalance(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAddressBalance(address);
}

export async function getAddressBalances(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAddressBalances(address);
}

export async function getAddressAssetBalance(networkId: string, address: string, assetId: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAddressAssetBalance(address, assetId);
}

export async function getAddressAssetsBalances(networkId: string, address: string, assetIds: string[]) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAddressAssetsBalances(address, assetIds);
}

export async function getTransactionHistory(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getTransactionHistory(address);
}
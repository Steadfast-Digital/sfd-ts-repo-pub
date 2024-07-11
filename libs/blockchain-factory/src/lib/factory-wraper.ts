import { BlockchainFactory } from "./blockchain-factory";

export async function getBalance(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getBalance(address);
}

export async function getAllBalances(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAllBalances(address);
}

export async function getAssetBalance(networkId: string, address: string, assetId: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAssetBalance(address, assetId);
}

export async function getAssetsBalances(networkId: string, address: string, assetIds: string[]) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getAssetsBalances(address, assetIds);
}

export async function getTransactionHistory(networkId: string, address: string) {
  const blockchain = await BlockchainFactory.createBlockchain(networkId);
  return blockchain.getTransactionHistory(address);
}

export function subscribeToBalance(networkId: string, address: string) {
  const blockchain = BlockchainFactory.getConnection(networkId);
  return blockchain.subscribeToBalance(address);
}
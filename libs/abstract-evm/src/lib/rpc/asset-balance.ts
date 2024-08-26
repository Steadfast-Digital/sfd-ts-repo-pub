import { ethers } from 'ethers';

import { ERC20ABI, ERC721ABI, ERC1155ABI } from '../abis';
import { EvmAbstractionError } from '../errors';

class TokenCache {
  private _cache: Map<
    string,
    {
      type: string;
      name: string;
      symbol: string;
      decimals: number;
      balance: ethers.BigNumberish;
    }
  > = new Map();

  set(
    contractAddress: string,
    tokenData: {
      type: string;
      name: string;
      symbol: string;
      decimals: number;
      balance: ethers.BigNumberish;
    },
  ) {
    this._cache.set(contractAddress, tokenData);
  }

  get(contractAddress: string) {
    return this._cache.get(contractAddress);
  }

  has(contractAddress: string) {
    return this._cache.has(contractAddress);
  }
}

const TC = new TokenCache();

const TYPE2ABI: Record<string, Array<object>> = {
  ERC20: ERC20ABI,
  ERC721: ERC721ABI,
  ERC1155: ERC1155ABI,
};

async function getERC20TokenData(
  contract: ethers.Contract,
  address: string,
): Promise<{
  name: string;
  symbol: string;
  decimals: number;
  balance: ethers.BigNumberish;
}> {
  const name = await contract['name']();
  const symbol = await contract['symbol']();
  const decimals = await contract['decimals']();
  const balance = await contract['balanceOf'](address);

  return { name, symbol, decimals, balance };
}

async function getERC721TokenData(
  contract: ethers.Contract,
  address: string,
): Promise<{
  name: string;
  symbol: string;
  decimals: number;
  balance: ethers.BigNumberish;
}> {
  const name = await contract['name']();
  const symbol = await contract['symbol']();
  const balance = await contract['balanceOf'](address);

  return { name, symbol, decimals: 0, balance }; // ERC721 tokens don't have decimals
}

async function getERC1155TokenData(
  contract: ethers.Contract,
  address: string,
  assetId: string,
): Promise<{
  name: string;
  symbol: string;
  decimals: number;
  balance: ethers.BigNumberish;
}> {
  const balance = await contract['balanceOf'](address, assetId);

  return { name: 'ERC1155 Asset', symbol: '', decimals: 0, balance }; // ERC1155 doesn't have name/symbol per token
}

async function fetchTokenData(
  provider: ethers.Provider,
  address: string,
  assetId: string,
): Promise<{
  type: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: ethers.BigNumberish;
}> {
  let contract = new ethers.Contract(assetId, ERC20ABI, provider);

  try {
    return { type: 'ERC20', ...(await getERC20TokenData(contract, address)) };
  } catch {
    try {
      contract = new ethers.Contract(assetId, ERC721ABI, provider);
      return {
        type: 'ERC721',
        ...(await getERC721TokenData(contract, address)),
      };
    } catch {
      try {
        contract = new ethers.Contract(assetId, ERC1155ABI, provider);
        return {
          type: 'ERC1155',
          ...(await getERC1155TokenData(contract, address, assetId)),
        };
      } catch {
        throw new EvmAbstractionError(
          `Unable to determine asset type for ${assetId}`,
        );
      }
    }
  }
}

export async function fetchTokenBalance(
  provider: ethers.Provider,
  address: string,
  assetId: string,
): Promise<{
  type: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: ethers.BigNumberish;
}> {
  const cachedToken = TC.get(assetId);
  if (cachedToken) {
    try {
      const contract = new ethers.Contract(
        assetId,
        TYPE2ABI[cachedToken.type],
        provider,
      );
      const balance =
        cachedToken.type === 'ERC1155'
          ? await contract['balanceOf'](address, assetId)
          : await contract['balanceOf'](address);
      return { ...cachedToken, balance };
    } catch {
      throw new EvmAbstractionError(`Failed to fetch balance for ${assetId}`);
    }
  }
  const tokenData = await fetchTokenData(provider, address, assetId);
  TC.set(assetId, tokenData);
  return tokenData;
}

const fs = require('fs');
const path = require('path');
// Define the core abstraction functions and their details
const coreAbstractionFunctions = [
  {
    functionName: 'CoreNetworkAbstraction',
    purpose: 'Abstract base class for network interactions',
    inputs: 'networkId: string',
    outputs: 'An instance of CoreNetworkAbstraction'
  },
  {
    functionName: 'getBalance',
    purpose: 'Fetch the balance for an address',
    inputs: 'address: string',
    outputs: 'Promise<AddressBalance>'
  },
  {
    functionName: 'getAllBalances',
    purpose: 'Fetch all balances for an address',
    inputs: 'address: string',
    outputs: 'Promise<AddressBalances>'
  },
  {
    functionName: 'getAssetBalance',
    purpose: 'Fetch the balance for a specific asset',
    inputs: 'address: string, assetId: string',
    outputs: 'Promise<AssetBalance>'
  },
  {
    functionName: 'getAssetsBalances',
    purpose: 'Fetch balances for specific assets',
    inputs: 'address: string, assetIds: string[]',
    outputs: 'Promise<AssetBalance[]>'
  },
  {
    functionName: 'getAllAssetsBalances',
    purpose: 'Fetch balances for all assets',
    inputs: 'address: string',
    outputs: 'Promise<AssetBalance[]>'
  },
  {
    functionName: 'getTransaction',
    purpose: 'Fetch a transaction by its hash',
    inputs: 'hash: string',
    outputs: 'Promise<Transaction>'
  },
  {
    functionName: 'getRecentTransactions',
    purpose: 'Fetch recent transactions for an address',
    inputs: 'address: string, limit?: number',
    outputs: 'Promise<Transaction[]>'
  },
  {
    functionName: 'getTransactionHistory',
    purpose: 'Fetch transaction history for an address',
    inputs: 'address: string, limit?: number, sblock?: number, eblock?: number',
    outputs: 'Promise<Transaction[]>'
  },
  {
    functionName: 'subscribeToBalance',
    purpose: 'Subscribe to balance updates for an address',
    inputs: 'address: string',
    outputs: 'Observable<AddressBalance>'
  },
  {
    functionName: 'subscribeToTransactions',
    purpose: 'Subscribe to transaction updates for an address',
    inputs: 'address: string',
    outputs: 'Observable<Transaction[]>'
  },
  {
    functionName: 'subscribeToUpdates',
    purpose: 'Subscribe to balance and transaction updates for an address',
    inputs: 'address: string',
    outputs: 'Observable<UpdateFeed>'
  }
];

// Define the package implementation details
const packageImplementations = [
  { packageName: '@steadfastdigital/abstract-core', functions: ['CoreNetworkAbstraction', 'getBalance', 'getAllBalances', 'getAssetBalance', 'getAssetsBalances', 'getAllAssetsBalances', 'getTransaction', 'getRecentTransactions', 'getTransactionHistory', 'subscribeToBalance', 'subscribeToTransactions', 'subscribeToUpdates'] },
  { packageName: '@steadfastdigital/abstract-evm', functions: ['CoreNetworkAbstraction', 'getBalance', 'getAllBalances', 'getAssetBalance', 'getAssetsBalances', 'getAllAssetsBalances', 'getRecentTransactions', 'getTransactionHistory', 'subscribeToBalance'] },
];

// Generate markdown content for core abstraction functions
let coreAbstractionTable = `### Core Abstraction Class and Functions\n\n`;
coreAbstractionTable += `| Function/Interface | Purpose | Inputs | Outputs |\n`;
coreAbstractionTable += `|---------|---------|---------|---------|\n`;

coreAbstractionFunctions.forEach(func => {
  coreAbstractionTable += `| \`${func.functionName}\` | ${func.purpose} | \`${func.inputs}\` | \`${func.outputs}\` |\n`;
});

// Generate markdown content for package implementations
let packageImplementationTable = `### Function Implementation in Different Packages\n\n`;
packageImplementationTable += `| Function | ` + packageImplementations.map(impl => `\`${impl.packageName}\``).join(' | ') + ` |\n`;
packageImplementationTable += `|-----------------|` + packageImplementations.map(() => '-----------------').join('|') + `|\n`;

coreAbstractionFunctions.forEach(func => {
  packageImplementationTable += `| \`${func.functionName}\` | ` + packageImplementations.map(impl => impl.functions.includes(func.functionName) ? '✅' : '❌').join(' | ') + ` |\n`;
})

// Combine both tables
const markdownContent = `${coreAbstractionTable}\n${packageImplementationTable}`;

// Write the content to a .md file
fs.writeFileSync(path.join(__dirname, "..", "docs_internal", "Summary.md"), markdownContent);

console.log('Markdown file has been generated.');

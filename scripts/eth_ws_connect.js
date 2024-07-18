const { ethers } = require('ethers');

// Define your WebSocket provider URL (e.g., Infura, Alchemy, etc.)
const wsProviderUrl = 'wss://eth-arch-01.savvyblocks.io/rpc';

// Create a WebSocket provider
const provider = new ethers.providers.WebSocketProvider(wsProviderUrl);

// Define the address you want to listen to
const targetAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

// Filter to listen for any transaction involving the target address
const filter = {
    address: targetAddress
};

// Event listener for new blocks
provider.on('block', (blockNumber) => {
    console.log(`New Block: ${blockNumber}`);
});

// Event listener for the specified filter
provider.on(filter, async (log) => {
    console.log('Event:', log);

    // Fetch transaction details
    const transaction = await provider.getTransaction(log.transactionHash);
    console.log('Transaction:', transaction);

    // Fetch block details
    const block = await provider.getBlock(log.blockNumber);
    console.log('Block:', block);
});

// Handle connection errors
provider._websocket.on('error', (err) => {
    console.error('WebSocket Error:', err);
});

// Handle WebSocket closure
provider._websocket.on('close', (code, reason) => {
    console.error(`WebSocket Closed: ${code} - ${reason}`);
});

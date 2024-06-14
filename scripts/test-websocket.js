const { io } = require('socket.io-client');

// Connect to the WebSocket server
const socket = io('http://localhost:3001');

socket.on('connect', () => {
  console.log('Connected to WebSocket server');

  // Subscribe to balance updates
  socket.emit('subscribeToBalance', { network: 'eth', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' });

  // Listen for balance updates
  socket.on('balanceUpdate', (data) => {
    console.log('Balance Update:', data);
  });

  // Listen for errors
  socket.on('error', (error) => {
    console.error('Error:', error);
  });
});

// Handle disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

import '../../app/global.css';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { io, Socket } from 'socket.io-client';

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Textarea,
  Label,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui';

const NETWORK_TESTER = () => {
  const [network, setNetwork] = useState('eth');
  const [address, setAddress] = useState(
    '0x513c87314578d089ce1f0d9dade81fd637adbb21',
  );
  const [result, setResult] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io('http://localhost:3001');
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketInstance.on('balanceUpdate', (balance: any) => {
      setResult(JSON.stringify(balance, null, 2));
    });

    socketInstance.on('error', (error: any) => {
      setResult(`Error: ${error}`);
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleNetworkChange = (value: string) => {
    setNetwork(value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleTestFunction = async (endpoint: string) => {
    setResult('Testing...');

    try {
      const baseUrl = 'http://localhost:3001/api';
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ network, address }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(JSON.stringify(data, null, 2));
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    }
  };

  const handleSubscribeToBalance = () => {
    setResult('Subscribing to balance updates...');
    if (socket) {
      socket.emit('subscribeToBalance', { network, address });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle>Network Tester</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="network">Select Network:</Label>
            <Select value={network} onValueChange={handleNetworkChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">Ethereum</SelectItem>
                <SelectItem value="bsc">Binance Smart Chain</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor="address">Address:</Label>
            <Input
              id="address"
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter blockchain address"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Button onClick={() => handleTestFunction('getBalance')}>
              Test getBalance
            </Button>
            <Button onClick={() => handleTestFunction('getTransactionHistory')}>
              Test getTransactionHistory
            </Button>
            <Button onClick={() => handleTestFunction('getAssetsBalances')}>
              Test getAssetsBalances
            </Button>
            <Button onClick={() => handleTestFunction('getBalances')}>
              Test getAllBalances
            </Button>
            <Button onClick={handleSubscribeToBalance}>
              Subscribe to Balance Updates
            </Button>
          </div>
          <div className="mt-4">
            <Label>Result:</Label>
            <Textarea
              readOnly
              value={result}
              rows={10}
              className="w-full mt-2"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NETWORK_TESTER;

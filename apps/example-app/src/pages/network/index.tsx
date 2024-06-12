import '../../app/global.css';
import { useState, ChangeEvent } from 'react';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Input, Textarea, Label, Card, CardContent, CardHeader, CardTitle } from '../../components/ui';

const NetworkTester = () => {
  const [network, setNetwork] = useState('eth');
  const [address, setAddress] = useState('0x938B8B088E419278DaBfAAEDADA7a83ab7D75A7E');
  const [result, setResult] = useState('');

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
            <Button onClick={() => handleTestFunction('getAddressBalance')}>Test getAddressBalance</Button>
            <Button onClick={() => handleTestFunction('getTransactionHistory')}>Test getTransactionHistory</Button>
            <Button onClick={() => handleTestFunction('getAddressAssetsBalances')}>Test getAddressAssetsBalances</Button>
            <Button onClick={() => handleTestFunction('getAddressBalances')}>Test getAddressBalances</Button>
          </div>
          <div className="mt-4">
            <Label>Result:</Label>
            <Textarea readOnly value={result} rows={10} className="w-full mt-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkTester;

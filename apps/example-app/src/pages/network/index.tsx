import { useState, ChangeEvent } from 'react';

const NetworkTester = () => {
  const [network, setNetwork] = useState('eth');
  const [address, setAddress] = useState('');
  const [result, setResult] = useState('');

  const handleNetworkChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNetwork(event.target.value);
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
    <div>
      <h1>Network Tester</h1>
      <div>
        <label>
          Select Network:
          <select value={network} onChange={handleNetworkChange}>
            <option value="eth">Ethereum</option>
            {/* Add more networks as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
      </div>
      <div>
        <button onClick={() => handleTestFunction('getAddressBalance')}>Test getAddressBalance</button>
        <button onClick={() => handleTestFunction('getTransactionHistory')}>Test getTransactionHistory</button>
        <button onClick={() => handleTestFunction('getAddressAssetsBalances')}>Test getAddressAssetsBalances</button>
        <button onClick={() => handleTestFunction('getAddressBalances')}>Test getAddressBalances</button>
      </div>
      <div>
        <h2>Result</h2>
        <textarea readOnly value={result} rows={20} cols={80}></textarea>
      </div>
    </div>
  );
};

export default NetworkTester;

import React, { useState } from 'react';
import { verifyHash } from '../api/api';
import '../styles/HashChecker.css'; // Import the CSS file

const HashChecker = () => {
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');
  const [isMatch, setIsMatch] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    console.log('Check button clicked'); // Log button click
    console.log('Current password:', password); // Log password input
    console.log('Current hash:', hash); // Log hash input

    // Validate fields
    if (!password || !hash) {
      const errorMessage = 'Both fields are required.';
      setError(errorMessage);
      console.log('Validation error:', errorMessage); // Log validation error
      return;
    }

    setError(''); // Clear any existing error messages
    console.log('Validation passed. Proceeding to verify hash.');

    try {
      const result = await verifyHash(password, hash);
      setIsMatch(result.isMatch); // Assuming the backend returns `isMatch`
      console.log('API response:', result); // Log API response
    } catch (error) {
      console.error('Error checking hash:', error); // Log any errors
      alert('Error checking hash');
    }
  };

  return (
    <div className="hash-checker-container">
      <h2>Check Bcrypt Hash</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log('Password field updated:', e.target.value); // Log password field changes
        }}
      />
      <input
        type="text"
        placeholder="Enter hash"
        value={hash}
        onChange={(e) => {
          setHash(e.target.value);
          console.log('Hash field updated:', e.target.value); // Log hash field changes
        }}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleCheck}>Check Hash</button>
      {isMatch !== null && (
        <p className={isMatch ? 'match' : 'no-match'}>
          {isMatch ? 'Password matches the hash!' : 'Password does not match the hash.'}
        </p>
      )}
    </div>
  );
};

export default HashChecker;

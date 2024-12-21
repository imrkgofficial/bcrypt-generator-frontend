import React, { useState } from 'react';
import { generateHash } from '../api/api';
import '../styles/HashGenerator.css';

const HashGenerator = () => {
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');
  const [copySuccess, setCopySuccess] = useState(''); // To track copy success
  const [errorMessage, setErrorMessage] = useState(''); // Validation error message

  const handleGenerate = async () => {
    console.log('Generate button clicked'); // Log when the generate button is clicked
    console.log('Current password input:', password); // Log the entered password

    if (!password) {
      const error = 'Password is required!';
      setErrorMessage(error);
      console.log('Validation error:', error); // Log validation error
      return;
    }

    setErrorMessage(''); // Clear error message when input is valid
    console.log('Password validation passed');

    try {
      console.log('Calling generateHash API...');
      const result = await generateHash(password);
      console.log('API response:', result); // Log the backend response
      setHash(result.hash); // Assuming the backend response has a "hash" field
      setCopySuccess(''); // Clear copy success message
    } catch (error) {
      console.error('Error generating hash:', error); // Log the error
      alert('Error generating hash');
    }
  };

  const handleCopy = () => {
    console.log('Copy button clicked'); // Log when the copy button is clicked
    console.log('Hash to copy:', hash); // Log the hash being copied

    navigator.clipboard.writeText(hash)
      .then(() => {
        const successMessage = 'Hash copied to clipboard!';
        setCopySuccess(successMessage);
        console.log(successMessage); // Log copy success
        setTimeout(() => setCopySuccess(''), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        const errorMessage = 'Failed to copy hash.';
        setCopySuccess(errorMessage);
        console.error(errorMessage, error); // Log copy failure
      });
  };

  return (
    <div className="hash-generator-container">
      <h2>Generate Bcrypt Hash</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log('Password field updated:', e.target.value); // Log input changes
        }}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleGenerate}>Generate Hash</button>
      {hash && (
        <div className="hash-display">
          <p>{hash}</p>
          <button className="copy-btn" onClick={handleCopy}>
            Copy Hash
          </button>
          {copySuccess && <p className="copy-success">{copySuccess}</p>}
        </div>
      )}
    </div>
  );
};

export default HashGenerator;

import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState<'ok' | 'unknown'>('unknown');
  const checkStatus = useCallback(() => {
    fetch('/healthcheck')
      .then((response) => response.json())
      .then(({ status }) => {
        setStatus(status);
      });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={checkStatus}>status is {status}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

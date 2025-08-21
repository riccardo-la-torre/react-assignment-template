import { useCallback, useState } from 'react';

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
      <button
        className="rounded-lg bg-blue-500 text-white p-3 cursor-pointer"
        onClick={checkStatus}
      >
        status is {status}
      </button>
    </>
  );
}

export default App;

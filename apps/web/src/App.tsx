import { useEffect, useState } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking API...");

  useEffect(() => {
    fetch("http://localhost:3001/health")
      .then((response) => response.json())
      .then((data) => {
        setApiStatus(data.status);
      })
      .catch(() => {
        setApiStatus("API unavailable");
      });
  }, []);

  return (
    <div>
      <h1>GoatQuote</h1>

      <p>
        Autonomous Commercial Insurance Assistant
      </p>

      <p>
        API Status: {apiStatus}
      </p>
    </div>
  );
}

export default App;
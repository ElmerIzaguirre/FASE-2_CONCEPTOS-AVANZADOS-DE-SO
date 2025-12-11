import { useState, useEffect } from "react";

function App() {
  const [systemInfo, setSystemInfo] = useState({});
  
  useEffect(() => {
    setSystemInfo({
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      env: import.meta.env.MODE,
      version: import.meta.env.VITE_APP_VERSION || "1.0.0"
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejercicio 3 — Información del Sistema</h1>

      <h2>Variables de entorno</h2>
      <ul>
        <li><strong>MODE:</strong> {systemInfo.env}</li>
        <li><strong>VERSION:</strong> {systemInfo.version}</li>
      </ul>

      <h2>Información del Navegador</h2>
      <ul>
        <li><strong>Platform:</strong> {systemInfo.platform}</li>
        <li><strong>User Agent:</strong> {systemInfo.userAgent}</li>
        <li><strong>Language:</strong> {systemInfo.language}</li>
      </ul>
    </div>
  );
}

export default App;

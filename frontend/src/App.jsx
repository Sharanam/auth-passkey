import { useState } from "react";
import { startRegistration, startAuthentication } from "@simplewebauthn/browser";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  const handleRegister = async () => {
    const { data: options } = await axios.post("http://localhost:5000/api/auth/register", { username });
    const attestation = await startRegistration(options);
    console.log("Passkey Registered:", attestation);
  };

  const handleLogin = async () => {
    const { data: options } = await axios.post("http://localhost:5000/api/auth/authenticate", { username });
    const assertion = await startAuthentication(options);
    console.log("Passkey Authenticated:", assertion);
  };

  return (
    <div>
      <h1>Passkey Authentication</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleRegister}>Register Passkey</button>
      <button onClick={handleLogin}>Login with Passkey</button>
    </div>
  );
}

export default App;

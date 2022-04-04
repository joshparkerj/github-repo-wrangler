import { useState } from 'react';

import type { NextPage } from 'next';

const Login: NextPage = () => {
  const [clientId, setClientId] = useState('');

  return (
    <div>
      <h2>Login</h2>
      { clientId.length > 0 ? <a href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}>go to the github authorize page</a> : null }
      <label htmlFor="client-id-input">
        Input Client ID here:
        <input type="text" id="client-id-input" value={clientId} onChange={({ target: { value }}) => setClientId(value)} />
      </label>
    </div>
  );
};

export default Login;

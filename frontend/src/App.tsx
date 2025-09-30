import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [showSignup, setShowSignup] = useState(false);

  if (token) {
    return <div>Logged in! JWT: {token}</div>;
  }

  return (
    <div>
      {showSignup ? (
        <>
          <SignupForm onSignup={setToken} />
          <button onClick={() => setShowSignup(false)}>Already have an account? Login</button>
        </>
      ) : (
        <>
          <LoginForm onLogin={setToken} />
          <button onClick={() => setShowSignup(true)}>No account? Sign Up</button>
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';

export default function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Extract subdomain from window.location.hostname
  const getTenantSubdomain = () => {
    const host = window.location.hostname;
    const parts = host.split('.');
    // If using localhost or no subdomain, fallback to empty string
    if (host === 'localhost' || parts.length < 3) return '';
    return parts[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const tenantSubdomain = getTenantSubdomain();
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, tenantSubdomain }),
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </form>
  );
}
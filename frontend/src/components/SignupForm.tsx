import React, { useState } from 'react';

export default function SignupForm({ onSignup }: { onSignup: (token: string) => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const tenantSubdomain= 'acme.yourapp.com';
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, tenantSubdomain }),
            });
            const data = await res.json();
            if (res.ok) {
                onSignup(data.token);
            } else {
                setError(data.error || 'Signup failed');
            }
        } catch {
            setError('Network error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
}
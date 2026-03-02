'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const generateToken = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: 'demo_user' })
            });

            const data = await response.json();
            setToken(data.token);
            setMessage('✅ Token generated! Click "Access Protected Page" to continue.');

            // Store token in cookie
            document.cookie = `authToken=${data.token}; path=/; max-age=${60 * 60}`;

            // Also store in localStorage for demonstration
            localStorage.setItem('authToken', data.token);
        } catch (error) {
            setMessage('❌ Error generating token');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const accessProtectedPage = () => {
        if (token) {
            // Pass token in header for this request
            router.push('/LAB_24/protected-page');
        } else {
            setMessage('Please generate a token first');
        }
    };

    return (
        <div>
            <h2>🔐 Authentication - Token Generation</h2>
            <p className="lead">Demonstrating Token-based Authentication with Middleware</p>

            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h5>Part B & C: Token-Based Authentication</h5>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info">
                                <h6>How it works:</h6>
                                <ol className="mb-0">
                                    <li>Generate a new authentication token</li>
                                    <li>Token is stored in a cookie (for middleware to check)</li>
                                    <li>Access the protected page - middleware validates the token</li>
                                    <li>If token is expired, middleware automatically refreshes it</li>
                                </ol>
                            </div>

                            <div className="mt-4">
                                <button 
                                    className="btn btn-primary btn-lg me-3"
                                    onClick={generateToken}
                                    disabled={loading}
                                >
                                    {loading ? 'Generating...' : '🔑 Generate Token'}
                                </button>
                            </div>

                            {token && (
                                <div className="mt-4">
                                    <div className="alert alert-success">
                                        <strong>Your Token:</strong>
                                        <code className="d-block mt-2 p-2 bg-light rounded">
                                            {token}
                                        </code>
                                    </div>

                                    <div className="mt-3">
                                        <h6>Token Details:</h6>
                                        <ul className="small">
                                            <li><strong>Type:</strong> Bearer Token</li>
                                            <li><strong>Expiry:</strong> 1 hour from generation</li>
                                            <li><strong>Storage:</strong> Cookie + LocalStorage</li>
                                            <li><strong>Auto-Refresh:</strong> Enabled by middleware</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {message && (
                                <div className={`alert mt-3 ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                                    {message}
                                </div>
                            )}

                            <div className="mt-4">
                                <button 
                                    className="btn btn-success btn-lg me-3"
                                    onClick={accessProtectedPage}
                                    disabled={!token}
                                >
                                    → Access Protected Page
                                </button>
                                <Link href="/LAB_24" className="btn btn-outline-secondary btn-lg">
                                    Back to LAB 24
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-warning text-dark">
                            <h5>🔍 Middleware Checks</h5>
                        </div>
                        <div className="card-body small">
                            <h6>When you access protected page:</h6>
                            <div className="list-group list-group-flush">
                                <div className="list-group-item">
                                    <strong>✓ Step 1:</strong> Middleware checks for token
                                </div>
                                <div className="list-group-item">
                                    <strong>✓ Step 2:</strong> Validates token exists
                                </div>
                                <div className="list-group-item">
                                    <strong>✓ Step 3:</strong> Checks expiry time
                                </div>
                                <div className="list-group-item">
                                    <strong>✓ Step 4:</strong> Refreshes if needed
                                </div>
                                <div className="list-group-item">
                                    <strong>✓ Step 5:</strong> Allows access to page
                                </div>
                            </div>

                            <div className="alert alert-info mt-3 small">
                                <strong>No Token?</strong> Middleware redirects to this login page.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

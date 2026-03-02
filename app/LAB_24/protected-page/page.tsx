'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TokenInfo {
    token: string;
    issuedAt: string;
    expiresAt: string;
    status: string;
}

export default function ProtectedPage() {
    const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get token info from browser
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('authToken='))
            ?.split('=')[1];

        if (token) {
            const issuedTime = new Date();
            const expiryTime = new Date(issuedTime.getTime() + 60 * 60 * 1000); // 1 hour

            setTokenInfo({
                token: token.substring(0, 30) + '...',
                issuedAt: issuedTime.toLocaleString(),
                expiresAt: expiryTime.toLocaleString(),
                status: '✅ Active & Valid'
            });
        }

        setLoading(false);
    }, []);

    return (
        <div>
            <h2>🛡️ Protected Page - Access Granted</h2>
            <p className="lead">This page is protected by middleware authentication</p>

            <div className="alert alert-success mt-4">
                <h5>✅ Authorization Successful!</h5>
                <p className="mb-0">Your token passed middleware verification. This content is only visible to authenticated users.</p>
            </div>

            {loading ? (
                <div className="alert alert-info">Loading token information...</div>
            ) : tokenInfo ? (
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h5>🔐 Token Information</h5>
                            </div>
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-sm-5">Token:</dt>
                                    <dd className="col-sm-7">
                                        <code className="small">{tokenInfo.token}</code>
                                    </dd>

                                    <dt className="col-sm-5">Issued At:</dt>
                                    <dd className="col-sm-7">
                                        <small>{tokenInfo.issuedAt}</small>
                                    </dd>

                                    <dt className="col-sm-5">Expires At:</dt>
                                    <dd className="col-sm-7">
                                        <small>{tokenInfo.expiresAt}</small>
                                    </dd>

                                    <dt className="col-sm-5">Status:</dt>
                                    <dd className="col-sm-7">
                                        <span className="badge bg-success">{tokenInfo.status}</span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <h5>🔄 Middleware Processing</h5>
                            </div>
                            <div className="card-body">
                                <h6>Request Flow:</h6>
                                <div className="list-group list-group-flush">
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>1. Request Received</span>
                                        <span className="badge bg-primary">processed</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>2. Token Check (Part B)</span>
                                        <span className="badge bg-success">✓ Found</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>3. Token Validation</span>
                                        <span className="badge bg-success">✓ Valid</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>4. Expiry Check (Part C)</span>
                                        <span className="badge bg-success">✓ Not Expired</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>5. Access Granted</span>
                                        <span className="badge bg-success">✅ Allowed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning">
                    No token found. Please <Link href="/LAB_24/login">generate a token</Link> first.
                </div>
            )}

            <div className="card mt-5">
                <div className="card-header bg-secondary text-white">
                    <h5>📖 How Middleware Works Here</h5>
                </div>
                <div className="card-body">
                    <h6>The middleware.ts file implements:</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-primary">
                                <div className="card-header">
                                    <strong>Part B: Token Check</strong>
                                </div>
                                <div className="card-body small">
                                    <p>Middleware checks if <code>x-auth-token</code> header or <code>authToken</code> cookie exists</p>
                                    <p className="mb-0">❌ Missing token → Redirect to login</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-warning">
                                <div className="card-header">
                                    <strong>Part C: Token Refresh</strong>
                                </div>
                                <div className="card-body small">
                                    <p>Checks token expiry timestamp (1 hour)</p>
                                    <p className="mb-0">⏰ Expired → Auto-generate new token</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-success">
                                <div className="card-header">
                                    <strong>Part A: PageNo Default</strong>
                                </div>
                                <div className="card-body small">
                                    <p>Adds <code>pageNo=0</code> to pagination routes</p>
                                    <p className="mb-0">📄 Ensures all paginated requests have default value</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <Link href="/LAB_24" className="btn btn-primary">Back to LAB 24</Link>
                <Link href="/LAB_24/login" className="btn btn-warning ms-2">Generate New Token</Link>
            </div>
        </div>
    );
}

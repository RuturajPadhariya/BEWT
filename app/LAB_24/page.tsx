import Link from 'next/link';

export default function LAB24Page() {
    return (
        <div>
            <h1>LAB 24 - Middleware & NextJS Configuration</h1>
            <p className="lead">Demonstrating Middleware features and NextJS configurations</p>

            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                            <h5>Part A: PageNo Middleware</h5>
                        </div>
                        <div className="card-body">
                            <p><strong>Functionality:</strong> Automatically adds <code>pageNo=0</code> to pagination routes if not specified in the request.</p>
                            <div className="alert alert-info">
                                <code>middleware.ts</code> intercepts requests and ensures pagination always has a default pageNo value.
                            </div>
                            <p className="mb-0"><strong>Example:</strong> Route requests for pagination automatically add default parameter.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-warning text-dark">
                            <h5>Part B: Token Verification Middleware</h5>
                        </div>
                        <div className="card-body">
                            <p><strong>Functionality:</strong> Checks for authentication token in request headers or cookies. Redirects to login if not present.</p>
                            <div className="alert alert-warning">
                                Protected pages require <code>x-auth-token</code> header or <code>authToken</code> cookie.
                            </div>
                            <Link href="/LAB_24/protected-page" className="btn btn-warning btn-sm">
                                Try Protected Page
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-success text-white">
                            <h5>Part C: Token Refresh Middleware</h5>
                        </div>
                        <div className="card-body">
                            <p><strong>Functionality:</strong> Automatically detects expired tokens and issues new ones if the current token has expired.</p>
                            <div className="alert alert-success">
                                Token expiry: <strong>1 hour</strong> from generation. System automatically refreshes before expiry.
                            </div>
                            <p className="mb-0"><strong>Implementation:</strong> Check middleware.ts for token expiry logic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

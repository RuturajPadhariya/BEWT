import Link from 'next/link';

export default function Template2Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" href="/LAB_21/template2/home">
                        Template 2 - Professional
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_21/template2/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_21/template2/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_21/template2/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="py-5 bg-dark text-light min-vh-100">
                {children}
            </main>
        </>
    );
}

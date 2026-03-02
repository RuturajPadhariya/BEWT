import Link from 'next/link';
import SecondaryNavbar from '../components/SecondaryNavbar';

export default function LAB23Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SecondaryNavbar />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/LAB_23">
                        LAB 23 - Intercepting Routes & Route Handlers
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
                                <Link className="nav-link" href="/LAB_23">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_23/modal-demo">
                                    Intercepting Route Demo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mt-4">
                {children}
            </main>
        </>
    );
}

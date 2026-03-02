import Link from 'next/link';
import styles from './template3.module.css';

export default function Template3Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${styles.template3Nav}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" href="/LAB_21/template3/home">
                        Template 3 - Creative
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
                                <Link className="nav-link" href="/LAB_21/template3/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_21/template3/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LAB_21/template3/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className={`${styles.template3Main} py-5`}>
                {children}
            </main>
        </>
    );
}

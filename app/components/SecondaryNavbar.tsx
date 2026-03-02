import Link from 'next/link';

export default function SecondaryNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">All Labs</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#secondaryNavbar" aria-controls="secondaryNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="secondaryNavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Main Page</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/LAB_20/home" className="nav-link">LAB 20</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LAB_21" className="nav-link">LAB 21</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="/LAB_23" className="nav-link">LAB 23</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LAB_24" className="nav-link">LAB 24</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/LAB_28" className="nav-link">LAB 28</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
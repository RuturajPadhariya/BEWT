import Link from 'next/link';

export default function MainPage() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" href="/">
            Next.js Labs - Main page
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
                <Link className="nav-link" href="/LAB_20">LAB 20</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_21">LAB 21</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_23">LAB 23</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_24">LAB 24</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_25">LAB 25</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_28">LAB 28</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-4">Hello World from Next Application - Main page</h1>
            <p className="lead mb-4">Welcome to our Next.js application with multiple labs and templates.</p>
            <div className="row mt-5">
              <div className="col-md-6 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">LAB 20</h5>
                    <p className="card-text">CSS styling applied to static website and implemented into Next.js application.</p>
                    <Link href="/LAB_20" className="btn btn-primary">Explore LAB 20</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">LAB 21</h5>
                    <p className="card-text">Three different HTML/CSS templates implemented into Next.js application.</p>
                    <Link href="/LAB_21" className="btn btn-success">Explore LAB 21</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">LAB 23</h5>
                    <p className="card-text">Intercepting Routes & Route Handlers - Demonstrate parallel routes and intercepting routes with modals.</p>
                    <Link href="/LAB_23" className="btn btn-warning">Explore LAB 23</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">LAB 24</h5>
                    <p className="card-text">Middleware and NextJS Configuration - Token authentication, request processing, and configuration exploration.</p>
                    <Link href="/LAB_24" className="btn btn-danger">Explore LAB 24</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">LAB 25</h5>
                    <p className="card-text">Fetch students from MockAPI (getAll & getByID) with dynamic routing.</p>
                    <Link href="/LAB_25" className="btn btn-info">Explore LAB 25</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">LAB 28</h5>
                    <p className="card-text">Server Actions demonstration with dark themed layout.</p>
                    <Link href="/LAB_28" className="btn btn-secondary">Explore LAB 28</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
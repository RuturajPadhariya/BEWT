import Link from 'next/link'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import SecondaryNavbar from '../components/SecondaryNavbar'

export const metadata: Metadata = {
  title: 'Lab 28 - Server Actions Demo',
  description: 'NextJS Server Actions Implementation',
}

export default function LAB28Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SecondaryNavbar />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/LAB_28">
            LAB 28 - Server Actions
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#lab28Nav"
            aria-controls="lab28Nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="lab28Nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_28/Part_A">
                  Demo A
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_28/Part_B">
                  Demo B
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LAB_28/Part_C">
                  Demo C
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-4 bg-dark text-light" style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '40px' }}>
        {children}
      </main>
    </>
  )
}

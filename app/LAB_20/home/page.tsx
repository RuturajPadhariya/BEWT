export default function Home() {
    return (
        <main>
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron bg-dark text-white p-5 rounded-lg m-3">
                        <h1 className="display-4">Welcome to Home</h1>
                        <p className="lead">This is a modern home page with Bootstrap styling.</p>
                        <hr className="my-4" />
                        <p>Explore our website to learn more about us.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">High quality content and services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">Professional and responsive design.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">User-friendly interface.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
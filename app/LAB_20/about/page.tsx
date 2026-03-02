export default function About() {
    return (
        <main>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                            <h2 className="mb-0">About Us</h2>
                        </div>
                        <div className="card-body">
                            <p className="lead">We are a team dedicated to providing excellent services.</p>
                            <p>Our mission is to deliver high-quality solutions to our clients with professionalism and integrity.</p>
                            <h5 className="mt-4">Our Values:</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Excellence</li>
                                <li className="list-group-item">Innovation</li>
                                <li className="list-group-item">Integrity</li>
                                <li className="list-group-item">Customer Focus</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <h5 className="card-title">Quick Facts</h5>
                            <p><strong>Founded:</strong> 2024</p>
                            <p><strong>Team Size:</strong> 50+</p>
                            <p><strong>Clients:</strong> 100+</p>
                            <p><strong>Projects:</strong> 200+</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
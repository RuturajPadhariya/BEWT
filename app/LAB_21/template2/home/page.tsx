export default function Template2Home() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="card bg-dark text-white shadow-lg border-0">
                        <div className="card-body p-5">
                            <h1 className="card-title text-white mb-3">Professional Services</h1>
                            <p className="card-text lead">Excellence in business solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-white shadow border-0 h-100">
                        <div className="card-body">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                                <span className="fs-5">1</span>
                            </div>
                            <h5 className="card-title">Strategy</h5>
                            <p className="card-text">Strategic planning for success.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-white shadow border-0 h-100">
                        <div className="card-body">
                            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                                <span className="fs-5">2</span>
                            </div>
                            <h5 className="card-title">Implementation</h5>
                            <p className="card-text">Expert implementation services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-dark text-white shadow border-0 h-100">
                        <div className="card-body">
                            <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                                <span className="fs-5">3</span>
                            </div>
                            <h5 className="card-title">Support</h5>
                            <p className="card-text">Ongoing support and maintenance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
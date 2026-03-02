export default function Template1Home() {
    return (
        <div className="container">
            <div className="alert alert-info" role="alert">
                <h4 className="alert-heading">Welcome to Template 1!</h4>
                <p>This is a clean and minimalist design template.</p>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Simple Design</h5>
                            <p className="card-text">Clean and easy to navigate interface.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Responsive</h5>
                            <p className="card-text">Works perfectly on all devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

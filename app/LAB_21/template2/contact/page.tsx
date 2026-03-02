export default function Template2Contact() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="text-light mb-4">Contact Information</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-light shadow border-0">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Send us a Message</h5>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control bg-secondary text-light border-secondary" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control bg-secondary text-light border-secondary" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control bg-secondary text-light border-secondary" placeholder="Your Message" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-light shadow border-0">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Contact Details</h5>
                            <p><strong>Address:</strong> 123 Business St, City, State 12345</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Email:</strong> info@company.com</p>
                            <p><strong>Hours:</strong> Monday - Friday, 9AM - 5PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

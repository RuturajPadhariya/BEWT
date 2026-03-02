export default function Contact() {
    return (
        <main>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-success text-white">
                            <h2 className="mb-0">Contact Us</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
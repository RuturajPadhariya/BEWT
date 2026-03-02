export default function Template1Contact() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-primary mb-4">Get in Touch</h2>
                    <form className="border-0">
                        <div className="mb-3">
                            <input type="text" className="form-control border-bottom border-top-0 border-start-0 border-end-0" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control border-bottom border-top-0 border-start-0 border-end-0" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control border-bottom border-top-0 border-start-0 border-end-0" placeholder="Your Message" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

import styles from '../template3.module.css';

export default function Template3Contact() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-5 text-center">Contact Us</h2>
                    <div className={`${styles.creativeCard} p-4`}>
                        <form>
                            <div className="mb-3">
                                <input type="text" className={`${styles.formControlCustom} form-control`} placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className={`${styles.formControlCustom} form-control`} placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className={`${styles.formControlCustom} form-control`} placeholder="Your Message" rows={4} required></textarea>
                            </div>
                            <button type="submit" className={`${styles.btnCreative} btn w-100 text-white fw-bold`}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

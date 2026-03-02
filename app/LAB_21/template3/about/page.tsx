import styles from '../template3.module.css';

export default function Template3About() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="mb-4">About Template 3</h2>
                    <div className={styles.creativeCard}>
                        <p className="lead mb-4">Template 3 combines modern design principles with creative innovation.</p>
                        <h5 className="mb-3">Why Choose This Template?</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">✨ Modern Glass Morphism Design</li>
                            <li className="mb-2">🎯 Gradient Backgrounds</li>
                            <li className="mb-2">🔧 Custom CSS Effects</li>
                            <li className="mb-2">📱 Fully Responsive</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

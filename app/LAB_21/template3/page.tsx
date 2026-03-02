import styles from './template3.module.css';

export default function Template3Home() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 text-center">
                    <h1 className="display-4 mb-4" style={{fontWeight: 'bold'}}>Creative Design</h1>
                    <p className="lead">Modern, Bold, and Innovative</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className={`${styles.creativeCard} p-4 text-center h-100`}>
                        <div className="mb-3" style={{fontSize: '3em'}}>🎨</div>
                        <h5>Modern Design</h5>
                        <p>Cutting-edge visual aesthetics.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className={`${styles.creativeCard} p-4 text-center h-100`}>
                        <div className="mb-3" style={{fontSize: '3em'}}>⚡</div>
                        <h5>Performance</h5>
                        <p>Lightning fast loading times.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className={`${styles.creativeCard} p-4 text-center h-100`}>
                        <div className="mb-3" style={{fontSize: '3em'}}>🚀</div>
                        <h5>Innovation</h5>
                        <p>Next generation technology.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

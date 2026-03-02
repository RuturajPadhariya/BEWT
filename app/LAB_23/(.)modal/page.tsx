'use client';

import { useRouter } from 'next/navigation';

export default function ModalDemo() {
    const router = useRouter();

    return (
        <div 
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            aria-labelledby="modalTitle"
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title" id="modalTitle">
                            Intercepting Routes Demo
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close btn-close-white"
                            onClick={() => router.back()}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <h6>How Intercepting Routes Work:</h6>
                        <p>This modal is displayed using <strong>Intercepting Routes</strong> with the pattern <code>(.)modal</code>.</p>
                        
                        <div className="alert alert-info">
                            <ul className="mb-0">
                                <li><strong>Benefits:</strong> Display modals or alternate content without navigation</li>
                                <li><strong>URL Pattern:</strong> <code>/LAB_23/(.)modal</code></li>
                                <li><strong>How it works:</strong> Intercepts the route and shows custom content</li>
                                <li><strong>User Experience:</strong> Smooth modal display with back button support</li>
                            </ul>
                        </div>

                        <h6 className="mt-4">Intercepting Route Patterns:</h6>
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Pattern</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>(.)</code></td>
                                    <td>Match segments on the same level</td>
                                </tr>
                                <tr>
                                    <td><code>(..)</code></td>
                                    <td>Match segments one level above</td>
                                </tr>
                                <tr>
                                    <td><code>(...)</code></td>
                                    <td>Match segments from the root</td>
                                </tr>
                                <tr>
                                    <td><code>(.)</code></td>
                                    <td>Match all segments</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="alert alert-success mt-4">
                            This is Part A: Demonstrating intercepting routes - showing a modal without hard navigation!
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={() => router.back()}
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

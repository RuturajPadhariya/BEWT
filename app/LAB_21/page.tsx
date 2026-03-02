import Link from 'next/link';

export default function LAB21() {
    return (
        <div className="text-center py-5">
            <h1 className="display-4">LAB 21 - Multiple Templates</h1>
            <p className="lead">Explore three different template designs:</p>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Template 1</h5>
                            <p className="card-text">Modern Clean Design</p>
                            <Link href="/LAB_21/template1/home" className="btn btn-primary">Explore</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Template 2</h5>
                            <p className="card-text">Professional Business Style</p>
                            <Link href="/LAB_21/template2/home" className="btn btn-success">Explore</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Template 3</h5>
                            <p className="card-text">Creative Dark Theme</p>
                            <Link href="/LAB_21/template3/home" className="btn btn-dark">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

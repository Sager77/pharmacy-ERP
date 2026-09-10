import React from 'react';

function Categories() {
    return (
        <>

            <div className='row'>
                <div className='col-4'>
                    <div className="card border-info mb-3" style={{ maxWidth: "18rem", height: "100%" }}>
                        <div className="card-header">Total</div>
                        <div className="card-body">
                            <h5 className="card-title">934</h5>
                            <p className="card-text">Categories</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card border-info mb-3" style={{ maxWidth: "18rem", height: "100%" }}>
                        <div className="card-header">Total</div>
                        <div className="card-body">
                            <h5 className="card-title">300</h5>
                            <p className="card-text">Companies</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card border-info mb-3" style={{ maxWidth: "18rem", height: "100%" }}>
                        <div className="card-header">Total</div>
                        <div className="card-body">
                            <h5 className="card-title">54</h5>
                            <p className="card-text">Active</p>
                        </div>
                    </div>
                </div>
            </div>


            <table className="table table-bordered mt-2 mt-lg-5">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Company</th>
                        <th scope="col">p_code</th>
                        <th scope="col">r_price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                            <tr>
                                <td>Tablet</td>
                                <td>GSK</td>
                                <td>C-code</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                 
                    
                </tbody>
            </table>

            <section>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default Categories;
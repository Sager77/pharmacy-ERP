import React from 'react';
import { Form } from 'react-router-dom';

function Customer() {
    return (
        <Form className="row g-3">
            <div className="col-lg-6">
                <label className='form-label'>Territry:</label>
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            <div className="col-lg-6">
                <input type="text" className="form-control" required></input>
            </div>
            
        </Form>
    );
}

export default Customer;
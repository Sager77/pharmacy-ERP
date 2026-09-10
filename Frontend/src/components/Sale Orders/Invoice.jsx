import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

function Invoice() {
    const navigate = useNavigate();
    const handleSubmit= async (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        const actualData = Object.fromEntries(formData);
        console.log(actualData);
    }

    return (
        <>
            <h1>Create Invoice</h1>
            <Form className="form-control" onSubmit={handleSubmit} action='post'>
                <div className="row container g-3">

                    <div className="col-12 col-lg-6">
                        <label className="form-label">Customer Name :</label>
                        <input className="form-control" type='text' name='C_name' required></input>
                    </div>
                    <div className="col-12 col-lg-6  ">
                        <label className="form-label">Item Name :</label>
                        <input className="form-control" type='text' name='Item_name' required></input>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <label className="form-label">Price :</label>
                        <input className="form-control" type='text' name='Price' required></input>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <label className="form-label">Company :</label>
                        <input className="form-control" type='text' name='Company' required></input>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <label className="form-label">Category :</label>
                        <input className="form-control" type='text' name='Category' required></input>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <label className="form-label">Quantity :</label>
                        <input className="form-control" type='text' name='Quantity' required></input>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <button type='submit' className='btn btn-success'>Submmit</button>
                        <button className='btn  btn-secondary ms-2 ms-lg-4' onClick={()=> navigate("/item")}>Cancel</button>
                    </div>

                </div>
            </Form>
        </>

    );
}

export default Invoice;
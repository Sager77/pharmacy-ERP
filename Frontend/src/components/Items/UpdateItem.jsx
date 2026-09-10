import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { updatebyId } from '../APIs/dataApi';

function UpdateItem() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState(location.state || {});
    const itemData = data?.items;



    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const formData = Object.fromEntries(data);
        const id = parseInt(formData.itemId);
        await updatebyId(id, formData);
        
        navigate("/item");
    }



    return (
        <>
            <div className="container-fluid px-4 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        {/* Header */}
                        <div className="d-flex align-items-center mb-4">
                            <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                <i className="bi bi-plus-circle fs-3 text-primary"></i>
                            </div>
                            <div>
                                <h3 className="mb-0">Update Item</h3>
                                <small className="text-muted">Update the item details in inventory</small>
                            </div>
                        </div>

                        {/* Form Card */}
                        <div className="card border-0 shadow-lg rounded-4">
                            <div className="card-body p-4 p-md-5">
                                <Form onSubmit={handleSubmit}>

                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-box text-primary me-2"></i>
                                                Item Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='text'
                                                name='name'
                                                placeholder="Enter item name"
                                                defaultValue={itemData?.name || ''}
                                                required
                                            />
                                        </div>


                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-upc-scan text-primary me-2"></i>
                                                Product Code <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='text'
                                                name='productCode'
                                                placeholder="Enter product code"
                                                defaultValue={itemData?.productCode || ''}
                                                required
                                            />
                                        </div>


                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-text-paragraph text-primary me-2"></i>
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control form-control-lg"
                                                name='description'
                                                rows="3"
                                                placeholder="Enter item description"
                                                defaultValue={itemData?.description || ''}
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Category & Company */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-tags text-primary me-2"></i>
                                                Category <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                className="form-select form-select-lg"
                                                name="category"
                                                defaultValue={itemData?.category || ''}
                                                required
                                            >
                                                <option value="">Select a category...</option>
                                                <option value="Tablet">Tablet</option>
                                                <option value="Syrup">Syrup</option>
                                                <option value="Injectable">Injectable</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-building text-primary me-2"></i>
                                                Company Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='text'
                                                name='company'
                                                placeholder="Enter company name"
                                                defaultValue={itemData?.company || ''}
                                                required
                                            />
                                        </div>

                                        {/* Price & Quantity */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-currency-dollar text-primary me-2"></i>
                                                Retail Price <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='number'
                                                name='price'
                                                placeholder="0.00"
                                                step="0.01"
                                                defaultValue={itemData?.price || ''}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-box-seam text-primary me-2"></i>
                                                Quantity <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='number'
                                                name='quantity'
                                                placeholder="0"
                                                min="0"
                                                defaultValue={itemData?.quantity || ''}
                                                required
                                            />
                                        </div>

                                        {/* Expiry */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-calendar-event text-primary me-2"></i>
                                                Expiry Date <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type='date'
                                                name='expiry'
                                                defaultValue={itemData?.expiry ? new Date(itemData.expiry).toISOString().split('T')[0] : ''}
                                                required
                                            />
                                        </div>


                                        <div className="col-md-6 d-none">
                                            <label className="form-label fw-semibold">
                                                <i className="bi bi-hash text-primary me-2"></i>
                                                Item ID (Auto-generated)
                                            </label>
                                            <input
                                                className="form-control form-control-lg bg-light"
                                                type='number'
                                                name='itemId'
                                                defaultValue={itemData?.itemId || 'New Item'}

                                            />
                                        </div>

                                        {/* Buttons */}
                                        <div className="col-12 mt-4">
                                            <hr className="my-3" />
                                            <div className="d-flex gap-3 flex-wrap">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg px-5"

                                                >
                                                    <i className="bi bi-check-circle me-2"></i>
                                                    Update Item
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-lg px-5"
                                                    onClick={() => navigate("/item")}
                                                >
                                                    <i className="bi bi-x-circle me-2"></i>
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateItem;
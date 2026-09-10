import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { addItem } from '../APIs/dataApi';
import {Success} from '../../models/Popup';

function AddItems() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [popupSuccess, setPopupSuccess] = useState(false);

    const random = Math.random() * 100000;
    const itemId = Math.floor(random);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rawData = new FormData(e.target);
        const formData = Object.fromEntries(rawData);
        formData.itemId = itemId;
        formData.quantity = parseInt(formData.quantity);
        formData.price = parseInt(formData.price);
        console.log(formData);

        try {
            await addItem(formData);
            setPopupSuccess(true);
            setShowPopup(true);
            
            // Navigate after a short delay to show popup
            setTimeout(() => {
                navigate("/item");
            }, 2000);
            
        } catch (error) {
            console.log("something wrong", error);
            setPopupSuccess(false);
            setShowPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        // Only navigate if it was successful
        if (popupSuccess) {
            navigate("/item");
        }
    };

    return (
        <div className="container-fluid px-4 py-4">
            {/* Success/Error Popup */}
            <Success 
                value={popupSuccess} 
                onClose={handlePopupClose}
            />

            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <i className="bi bi-plus-circle fs-3 text-primary"></i>
                        </div>
                        <div>
                            <h3 className="mb-0">Add New Item</h3>
                            <small className="text-muted">Fill in the details to add a new item to inventory</small>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="card border-0 shadow-lg rounded-4">
                        <div className="card-body p-4 p-md-5">
                            <Form onSubmit={handleSubmit}>
                                {/* Hidden Item ID */}
                                <input type="hidden" name="itemId" value={itemId} />

                                <div className="row g-4">
                                    {/* Item Name */}
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
                                            required
                                        />
                                    </div>

                                    {/* Product Code */}
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
                                            required
                                        />
                                    </div>

                                    {/* Description */}
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
                                            required
                                        />
                                    </div>

                                    {/* Auto-generated ID Display */}
                                    <div className="col-md-6 d-none">
                                        <label className="form-label fw-semibold">
                                            <i className="bi bi-hash text-primary me-2"></i>
                                            Item ID (Auto-generated)
                                        </label>
                                        <input
                                            className="form-control form-control-lg bg-light"
                                            type='text'
                                            value={itemId}
                                            disabled
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
                                                Add Item
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
    );
}

export default AddItems;
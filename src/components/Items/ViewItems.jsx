import React, { useEffect, useState } from 'react';
import { getItembyId, getItems } from '../APIs/dataApi';
import { useLocation, useNavigate } from 'react-router-dom';

function ViewItems() {
    const location = useLocation();
    const [apiData, setApiData] = useState();
    const navigate = useNavigate();
    const [data, setItemData] = useState(location.state);


    const itemData = data?.items || data;
    const { name, description, category, quantity, company, price, expiry, productCode } = itemData || {};

    // Helper function to format date
    const formatDate = (dateValue) => {
        if (!dateValue) return 'N/A';
        try {
            const date = new Date(dateValue);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return 'N/A';
        }
    };

    // Helper function to format currency
    const formatPrice = (value) => {
        if (!value && value !== 0) return 'N/A';
        return `$${Number(value).toFixed(2)}`;
    };

    if (!itemData) {
        return (
            <div className="container text-center mt-5">
                <div className="card shadow-sm p-5">
                    <h3 className="text-muted">No data available</h3>
                    <button className='btn btn-primary px-4 mt-3' onClick={() => navigate("/item")}>
                        <i className="bi bi-arrow-left me-2"></i>Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-header bg-primary text-white rounded-top-4 py-3">
                                <h4 className="mb-0">
                                    <i className="bi bi-box-seam me-2"></i>
                                    Item Details
                                </h4>
                            </div>
                            <div className="card-body p-4">
                                <div className="row g-4">
                                    {/* Row 1: Item Name & Description */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Item Name</small>
                                            <h5 className="mt-1">{name || 'N/A'}</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Description</small>
                                            <h5 className="mt-1">{description || 'N/A'}</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Category</small>
                                            <h5 className="mt-1">
                                                <span className="badge bg-info text-dark">{category || 'N/A'}</span>
                                            </h5>
                                        </div>
                                    </div>

                                    {/* Row 2: Price, Quantity, Company */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Price</small>
                                            <h5 className="mt-1 text-success">{formatPrice(price)}</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Quantity</small>
                                            <h5 className="mt-1">
                                                <span className={`badge ${quantity > 0 ? 'bg-success' : 'bg-danger'}`}>
                                                    {quantity || 0} in stock
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Company</small>
                                            <h5 className="mt-1">{company || 'N/A'}</h5>
                                        </div>
                                    </div>

                                    {/* Row 3: Product Code, Expiry, Created At */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Product Code</small>
                                            <h5 className="mt-1">
                                                <code>{productCode || 'N/A'}</code>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Expiry Date</small>
                                            <h5 className="mt-1">
                                                {expiry ? new Date(expiry).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                }) : 'N/A'}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="border-bottom pb-2">
                                            <small className="text-muted fw-bold">Created At</small>
                                            <h5 className="mt-1">
                                                <i className="bi bi-calendar3 me-1"></i>
                                                {formatDate(itemData.createdAt)}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light rounded-bottom-4 py-3">
                                <div className="text-center">
                                    <button 
                                        className='btn btn-primary px-5 py-2' 
                                        onClick={() => navigate("/item")}
                                    >
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Back to Items
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewItems;
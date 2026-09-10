import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { deleteById, getItembyId, getItems, updatebyId } from '../APIs/dataApi';
import { NavLink, useNavigate } from 'react-router-dom';
import Pagenation from '../../../Pagenation';
import { DeletePop } from '../../models/Popup';

function Items() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showpop, setShowPopup] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);


    const navigate = useNavigate();

    // Search states
    const [searchCompany, setSearchCompany] = useState('');
    const [searchExpiry, setSearchExpiry] = useState('');
    const [searchStock, setSearchStock] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItems();
                console.log(data);
                setItems(data.items);
            } catch (err) {
                console.error('Error in component:', err);
                setError(err.message || 'Failed to load items');
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);


    useEffect(() => {
        let filtered = [...items];

        if (searchCompany.trim()) {
            filtered = filtered.filter(item =>
                item.company?.toLowerCase().includes(searchCompany.toLowerCase()) ||
                item.name?.toLowerCase().includes(searchCompany.toLowerCase())
            );
        }

        if (searchExpiry.trim()) {
            filtered = filtered.filter(item => {
                if (!item.expiry) return false;
                const expiry = new Date(item.expiry);
                const searchDate = new Date(searchExpiry);
                return expiry.toDateString() === searchDate.toDateString();
            });
        }

        if (searchStock.trim()) {
            const stockValue = parseInt(searchStock);
            if (!isNaN(stockValue)) {
                filtered = filtered.filter(item =>
                    (item.stock || item.quantity || 0) === stockValue
                );
            }
        }

        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setFilteredItems(filtered);
    }, [items, searchCompany, searchExpiry, searchStock]);


    const totalCategories = useMemo(() =>
        new Set(items.map(item => item.category)).size,
        [items]
    );

    const totalStock = useMemo(() =>
        items.reduce((sum, item) => sum + (item.quantity || 0), 0),
        [items]
    );


    //functions........
    const handleView = async (singleItem) => {
        console.log("item id .......>", singleItem);
        const getUser = await getItembyId(singleItem);
        console.log("user fetched............", getUser);
        navigate('/ViewItem', { state: getUser });
    };

    const updateItem = async (id) => {
        const getUser = await getItembyId(id);
        console.log("response from update function ", getUser);
        navigate("/updateItem", { state: getUser });
    }

    function deleteItem() {

        // await deleteById(deleteId);

        if (!deleteItemId) return

        const updatedItems = items.filter(item => item.itemId !== deleteItemId);
        setItems(updatedItems);
        setFilteredItems(updatedItems);
    }


    const handleShowPop = async (id) => {
        const deleteId = parseInt(id);
        setDeleteItemId(deleteId);
        setShowPopup(true);
        console.log(id);
    }

    const clearSearches = () => {
        setSearchCompany('');
        setSearchExpiry('');
        setSearchStock('');
    };

    // Check if any filter is active
    const isFilterActive = searchCompany.trim() || searchExpiry.trim() || searchStock.trim();

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-muted">Loading items...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger shadow-sm" role="alert">
                    <h4 className="alert-heading"><i className="bi bi-exclamation-triangle-fill me-2"></i>Error!</h4>
                    <p>{error}</p>
                    <hr />
                    <p className="mb-0">Please try refreshing the page or contact support.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <DeletePop value={showpop} onShow={setShowPopup} onDelete={deleteItem} />

            {/* Header Section */}
            <div className="container-fluid px-4">
                <div className="row align-items-center mb-4">
                    <div className="col">
                        <h3 className="mb-0">
                            <i className="bi bi-box-seam text-primary me-2"></i>
                            Inventory Management
                        </h3>
                        <small className="text-muted">Manage all your items in one place</small>
                    </div>
                    <div className="col text-end">
                        <NavLink to="/additems">
                            <button className="btn btn-primary px-4 py-2">
                                <i className="bi bi-plus-circle me-2"></i>
                                Add New Item
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="container-fluid px-4 mb-4">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 bg-gradient-primary text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-white-50 mb-1">Total Items</h6>
                                    <h2 className="text-white mb-0">{items.length}</h2>
                                </div>
                                <div className="bg-white bg-opacity-25 rounded-circle p-3">
                                    <i className="bi bi-box fs-2 text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 bg-gradient-success text-white" style={{ background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' }}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-white-50 mb-1">Categories</h6>
                                    <h2 className="text-white mb-0">
                                        {totalCategories}
                                    </h2>
                                </div>
                                <div className="bg-white bg-opacity-25 rounded-circle p-3">
                                    <i className="bi bi-tags fs-2 text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 bg-gradient-info text-white" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-white-50 mb-1">Total Stock</h6>
                                    <h2 className="text-white mb-0">
                                       {totalStock}
                                    </h2>
                                </div>
                                <div className="bg-white bg-opacity-25 rounded-circle p-3">
                                    <i className="bi bi-archive fs-2 text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="container-fluid px-4 mb-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-0">
                                        <i className="bi bi-building text-muted"></i>
                                    </span>
                                    <input
                                        type='text'
                                        className="form-control border-0 shadow-none"
                                        value={searchCompany}
                                        placeholder='Search by company or name...'
                                        onChange={(e) => setSearchCompany(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-0">
                                        <i className="bi bi-calendar text-muted"></i>
                                    </span>
                                    <input
                                        type='date'
                                        className="form-control border-0 shadow-none"
                                        value={searchExpiry}
                                        onChange={(e) => setSearchExpiry(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-0">
                                        <i className="bi bi-box-seam text-muted"></i>
                                    </span>
                                    <input
                                        type='number'
                                        className="form-control border-0 shadow-none"
                                        value={searchStock}
                                        placeholder='Filter by stock...'
                                        onChange={(e) => setSearchStock(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button
                                    className="btn btn-outline-secondary w-100"
                                    onClick={clearSearches}
                                >
                                    <i className="bi bi-eraser me-1"></i>
                                    Clear
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <small className="text-muted">
                                <i className="bi bi-info-circle me-1"></i>
                                {isFilterActive ? (
                                    <>Found <strong>{filteredItems.length}</strong> items matching your filters</>
                                ) : (
                                    <>Showing all <strong>{items.length}</strong> items</>
                                )}
                                {isFilterActive && filteredItems.length !== items.length && (
                                    <span className="ms-2 text-secondary">
                                        (out of {items.length} total)
                                    </span>
                                )}
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="container-fluid px-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="py-3 px-3">#</th>
                                        <th className="py-3">Item ID</th>
                                        <th className="py-3">Item Name</th>
                                        <th className="py-3">Company</th>
                                        <th className="py-3">Category</th>
                                        <th className="py-3 text-center">Quantity</th>
                                        <th className="py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map((item, index) => (
                                            <tr key={index} className="align-middle">
                                                <td className="px-3">{index + 1}</td>
                                                <td>
                                                    <span className="badge bg-light text-dark border">
                                                        #{item.itemId}
                                                    </span>
                                                </td>
                                                <td>
                                                    <strong>{item.name}</strong>
                                                    <br />
                                                    <small className="text-muted">{item.description?.substring(0, 30)}...</small>
                                                </td>
                                                <td>
                                                    <i className="bi bi-building me-1 text-muted"></i>
                                                    {item.company}
                                                </td>
                                                <td>
                                                    <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25">
                                                        {item.category}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    <span className={`badge ${(item.quantity || 0) > 10 ? 'bg-success' : (item.quantity || 0) > 0 ? 'bg-warning' : 'bg-danger'} px-3 py-2`}>
                                                        {item.quantity || 0}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <button
                                                            className="btn btn-sm btn-outline-success"
                                                            onClick={() => handleView(item.itemId)}
                                                            title="View Item"
                                                        >
                                                            <i className="bi bi-eye"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-primary"
                                                            title="Edit Item" onClick={() => updateItem(item.itemId)}
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            title="Delete Item" onClick={() => handleShowPop(item.itemId)}
                                                        >
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center py-5">
                                                <div className="text-muted">
                                                    <i className="bi bi-inbox fs-1 d-block mb-3"></i>
                                                    <h5>{isFilterActive ? 'No items match your filters' : 'No items found'}</h5>
                                                    <p>
                                                        {isFilterActive
                                                            ? 'Try adjusting your search filters or clear them to see all items.'
                                                            : 'Start by adding your first item to the inventory.'}
                                                    </p>
                                                    <NavLink to="/additems">
                                                        <button className="btn btn-primary btn-sm mt-2">
                                                            <i className="bi bi-plus-circle me-2"></i>
                                                            Add New Item
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="container-fluid px-4 mt-4">
                <div className="d-flex justify-content-center">
                    <Pagenation />
                </div>
            </div>
        </>
    );
}

export default Items;
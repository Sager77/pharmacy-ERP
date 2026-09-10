import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    // Dashboard card data
    const dashboardItems = [
        {
            id: 1,
            title: 'Categories',
            icon: 'bi-tags',
            color: 'primary',
            bgColor: 'bg-primary',
            path: '/categories',
            stats: '12',
            description: 'Manage product categories'
        },
        {
            id: 2,
            title: 'Items',
            icon: 'bi-box-seam',
            color: 'success',
            bgColor: 'bg-success',
            path: '/item',
            stats: '156',
            description: 'View and manage inventory'
        },
        {
            id: 3,
            title: 'Companies',
            icon: 'bi-building',
            color: 'info',
            bgColor: 'bg-info',
            path: '/companies',
            stats: '8',
            description: 'Supplier management'
        },
        {
            id: 4,
            title: 'Areas',
            icon: 'bi-geo-alt',
            color: 'warning',
            bgColor: 'bg-warning',
            path: '/areas',
            stats: '5',
            description: 'Location management'
        },
        {
            id: 5,
            title: 'Reports',
            icon: 'bi-file-earmark-bar-graph',
            color: 'danger',
            bgColor: 'bg-danger',
            path: '/reports',
            stats: '24',
            description: 'Generate reports'
        },
        {
            id: 6,
            title: 'Analytics',
            icon: 'bi-graph-up-arrow',
            color: 'purple',
            bgColor: 'bg-purple',
            path: '/analytics',
            stats: '89%',
            description: 'Performance metrics'
        }
    ];

    const handleCardClick = (path) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className="container-fluid px-4 py-4">
            {/* Welcome Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div>
                            <h1 className="display-5 fw-bold mb-2">
                                <i className="bi bi-grid-1x2-fill text-primary me-3"></i>
                                Dashboard
                            </h1>
                            <p className="text-muted fs-5">
                                Welcome back! Here's an overview of your inventory management system.
                            </p>
                        </div>
                        <div className="d-flex gap-2">
                            <span className="badge bg-primary bg-opacity-10 text-primary p-3">
                                <i className="bi bi-calendar3 me-2"></i>
                                {new Date().toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Overview Cards */}
            <div className="row g-3 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Total Items</h6>
                                    <h2 className="mb-0">156</h2>
                                    <small className="text-success">
                                        <i className="bi bi-arrow-up"></i> 12% this month
                                    </small>
                                </div>
                                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                    <i className="bi bi-box-seam fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Categories</h6>
                                    <h2 className="mb-0">12</h2>
                                    <small className="text-muted">Total categories</small>
                                </div>
                                <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                    <i className="bi bi-tags fs-3 text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Companies</h6>
                                    <h2 className="mb-0">8</h2>
                                    <small className="text-muted">Active suppliers</small>
                                </div>
                                <div className="bg-info bg-opacity-10 rounded-circle p-3">
                                    <i className="bi bi-building fs-3 text-info"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Total Stock</h6>
                                    <h2 className="mb-0">2,847</h2>
                                    <small className="text-success">
                                        <i className="bi bi-arrow-up"></i> 5% this month
                                    </small>
                                </div>
                                <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                    <i className="bi bi-archive fs-3 text-warning"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Cards Grid */}
            <div className="row g-4">
                {dashboardItems.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6">
                        <div 
                            className="card border-0 shadow-sm h-100 dashboard-card cursor-pointer"
                            onClick={() => handleCardClick(item.path)}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className={`rounded-circle p-3 ${item.bgColor} bg-opacity-10`}>
                                        <i className={`bi ${item.icon} fs-2 text-${item.color}`}></i>
                                    </div>
                                    <span className="badge bg-light text-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </div>
                                <h5 className="card-title fw-bold">{item.title}</h5>
                                <p className="text-muted small mb-2">{item.description}</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className={`badge bg-${item.color} bg-opacity-10 text-${item.color} fs-6 px-3 py-2`}>
                                        {item.stats}
                                    </span>
                                    <small className="text-muted">
                                        <i className="bi bi-chevron-right"></i> View
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-transparent border-0 py-3">
                            <h5 className="mb-0">
                                <i className="bi bi-clock-history me-2 text-primary"></i>
                                Recent Activity
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item bg-transparent px-0 d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-plus-circle text-success me-2"></i>
                                        <span>New item added: <strong>MacBook Pro</strong></span>
                                    </div>
                                    <small className="text-muted">2 hours ago</small>
                                </div>
                                <div className="list-group-item bg-transparent px-0 d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-pencil text-primary me-2"></i>
                                        <span>Item updated: <strong>iPhone 15</strong></span>
                                    </div>
                                    <small className="text-muted">5 hours ago</small>
                                </div>
                                <div className="list-group-item bg-transparent px-0 d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-trash text-danger me-2"></i>
                                        <span>Item removed: <strong>Old Inventory</strong></span>
                                    </div>
                                    <small className="text-muted">1 day ago</small>
                                </div>
                                <div className="list-group-item bg-transparent px-0 d-flex justify-content-between align-items-center">
                                    <div>
                                        <i className="bi bi-arrow-up-circle text-warning me-2"></i>
                                        <span>Stock updated: <strong>Samsung TV</strong></span>
                                    </div>
                                    <small className="text-muted">2 days ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom styles */}
            <style jsx>{`
                .dashboard-card {
                    transition: all 0.3s ease;
                }
                .dashboard-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.12) !important;
                }
                .bg-purple {
                    background-color: #6f42c1;
                }
                .text-purple {
                    color: #6f42c1;
                }
                .bg-purple.bg-opacity-10 {
                    background-color: rgba(111, 66, 193, 0.1);
                }
            `}</style>
        </div>
    );
}

export default Home;
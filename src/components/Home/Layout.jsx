import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navebar from '../navebar/Navebar';


const Layout = () => {
    return (

        <div className="container-fluid">

            <header className="app-header">

                <div className="header-content py-3 my-2">

                    <NavLink to="/" className="text-decoration-none text-success">
                        <h1>AZ Distribution</h1>
                    </NavLink>

                </div>

            </header>

            <div className="app-body row">

                <aside className="app-sidebar col-3 border text-primary">

                    <Navebar />

                </aside>

                <main className="app-main col-9 ">

                    <Outlet /> {/* Child routes render here */}

                </main>

            </div>

        </div>
    );
};

export default Layout;
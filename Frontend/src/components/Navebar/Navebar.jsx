import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navebar() {

    const [openMenu, setOpenMenu] = useState('item');

    function handleVisible(menuName) {
        setOpenMenu(menuName);
    }
    return (
        <>
            <div className="list h-100">

                <div>

                    <button className={`custom-btns fw-semibold ${openMenu === 'item' ? "active" : ""}`} onClick={() => handleVisible('item')}>
                        Items
                    </button>



                    <ul className="list-group">
                        <li className={`list-group-item border-0 ${openMenu === 'item' ? 'show' : 'hide'}`}>
                            <NavLink className="text-decoration-none text-reset" to="/item">items</NavLink>
                        </li>

                        <li className={`list-group-item border-0 ${openMenu === 'item' ? 'show' : 'hide'}`}><NavLink className="text-decoration-none text-reset" to="category">category</NavLink></li>

                        <li className={`list-group-item border-0 ${openMenu === 'item' ? 'show' : 'hide'}`}><NavLink className="text-decoration-none text-reset" to="stock">Stock</NavLink></li>
                    </ul>
                </div>

                <div>

                    <button className={`custom-btns fw-semibold ${openMenu === 'sales' ? "active" : ""}`} onClick={() => handleVisible('sales')}>
                        Sale Orders
                    </button>


                    <ul className="list-group">
                        <li className={`list-group-item border-0 ${openMenu === 'sales' ? 'show' : 'hide'}`}><NavLink className="text-decoration-none text-reset" to="invoice">Invoice</NavLink></li>

                        <li className={`list-group-item border-0 ${openMenu === 'sales' ? 'show' : 'hide'}`}><NavLink className="text-decoration-none text-reset" to="customer" >Customer</NavLink></li>

                        <li className={`list-group-item border-0 ${openMenu === 'sales' ? 'show' : 'hide'}`}><NavLink className="text-decoration-none text-reset" to="" >Stock</NavLink></li>
                    </ul>
                </div>

            </div>

        </>
    );
}

export default Navebar;
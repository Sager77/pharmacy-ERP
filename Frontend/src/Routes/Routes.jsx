import { createBrowserRouter } from "react-router-dom";



import Pagenation from "../../Pagenation";
import Home from "../../src/components/Home/Home";
import Categories from "../../src/components/Categories/Categories";
import Stock from "../../src/components/Items/Stock";
import ViewItems from "../../src/components/Items/ViewItems";
import Customer from "../../src/components/Sale Orders/Customer/Customer";
import Layout from "../components/Home/Layout";
import AddItems from "../components/Items/AddItems";
import Items from "../../src/components/Items/Items";
import  Invoice from "../components/Sale Orders/Invoice";
import UpdateItem from "../components/Items/UpdateItem";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element:<Home/>}, 
            { path: "additems", element: <AddItems /> }, 
            { path: "category", element: <Categories/> },
            { path: "stock", element: <Stock /> },
            { path: "item", element:<Items />  },
            { path: "ViewItem", element: <ViewItems />},
            {path: "customer", element: <Customer/>},
            { path: "invoice", element: <Invoice /> },
            { path: "updateItem", element: <UpdateItem /> },
            
            
            
            
        ]
    }
]);


export default router; 
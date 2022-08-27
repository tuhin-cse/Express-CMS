import React from "react";
import Sidebar from "../components/sidebar";

const AdminLayout = ({children}) => {
    return (
        <div className="w-full min-h-screen bg-gray-200">
            <Sidebar/>
            {children}
        </div>
    )
}
export default AdminLayout
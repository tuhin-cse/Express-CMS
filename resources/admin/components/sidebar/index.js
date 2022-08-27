import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-[250px] h-screen bg-white">
            <Link to="/admin/models">
                Models
            </Link>

        </div>
    )
}
export default Sidebar
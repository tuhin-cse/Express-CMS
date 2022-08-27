import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AdminLayout from "../layouts/admin";

const Router = () => {

    const routes = [{
        path: '/admin', element: <Dashboard/>
    }]

    return (
        <div className="">
            <Routes>
                <Route path="/admin/login" element={<About/>}/>
            </Routes>
            <AdminLayout>
                <Routes>
                    {routes?.map(d => <Route {...d}/>)}
                </Routes>
            </AdminLayout>
        </div>
    )
}
export default Router


function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/admin/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/admin">Home</Link>
            </nav>
        </>
    );
}
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>
                <Link to="/SignUpPage">SignUp</Link>
            </p>
            <p>
                <Link to="/LoginPage">Login</Link>
            </p>
            <p>
                <Link to="/itasworkshop">itasworkshop</Link> on GitHub.
            </p>
        </div>
    );
}
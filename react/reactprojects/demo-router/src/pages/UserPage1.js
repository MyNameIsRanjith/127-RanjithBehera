import React from "react";
import { Link } from "react-router-dom";


export default function UserPage(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>
                <Link to="/itasworkshop">itasworkshop</Link> on GitHub.
            </p>
        </div>
    );
}
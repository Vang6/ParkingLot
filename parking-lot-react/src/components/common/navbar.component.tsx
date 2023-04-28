import React from "react";
import ApplicationContext from "global_store/application.context";
import { NavBarParams } from "schema";
const NavBar = (props: NavBarParams) => {
    return <ApplicationContext.Consumer>
        {(context: any) => {
            console.log(context);
            return <div className="navbar">
                <div className="container-fluid d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a className="btn btn-sm btn-outline-secondary" onClick={() => { context.toggleMenu() }}>Menu</a>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-sm btn-outline-secondary">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        }}

    </ApplicationContext.Consumer>
}
export default NavBar;

import React, { useState } from "react";
import ApplicationContext from "global_store/application.context";
import { SideBarParams } from "schema";
import { Link } from "react-router-dom";
const SideBar = () => {
    const baseClassName = "side-bar bg-dark text-light"
    const links = <><ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/parkingzone" title="Parking Lot"> Parking Zone </Link>
        </li>
    </ul></>

    return <ApplicationContext.Consumer>
        {(context: any) => {
            return <div className={context.appState.sideBarParams.menuOpen ? baseClassName : `${baseClassName} close`}>
                <div className="row" style={{borderBottom: '1px solid #ccc'}}>
                    <div className="col">
                        <div style={{ padding: '12px' }}>
                            <h3>Park</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ textAlign: 'right', padding: '12px' }}>
                            <button className="btn btn-sm btn-dark" onClick={() => { context.toggleMenu() }}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                </div>
                {links}
            </div>
        }
        }
    </ApplicationContext.Consumer>
}
export default SideBar;




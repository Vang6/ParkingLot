import React, { useState } from "react";
import ApplicationContext from "global_store/application.context";
import { SideBarParams } from "schema";
import { Link } from "react-router-dom";
//import '@style/sidebar.css';
import '../../style/sidebar.css'
const SideBar = () => {
    const baseClassName = "side-bar bg-dark text-light"
    const links = <><ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link className="nav-link" to="parkingzone" title="Parking Lot" />
        </li>
    </ul></>
    
    return <ApplicationContext.Consumer>
        {(context: any) => {
            return <div className={context.appState.sideBarParams.menuOpen ? baseClassName : `${baseClassName} close`}>
                <div style={{ textAlign: 'right', padding: '12px' }}>
                    <button className="btn btn-sm btn-dark" onClick={() => { context.toggleMenu() }}>
                        Close
                    </button>
                </div>
                <hr className="bg-light" />
            </div>
        }
        }
    </ApplicationContext.Consumer>
}
export default SideBar;




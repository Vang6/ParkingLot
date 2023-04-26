import React from "react";
const ParkingZone = () => {
    return <div>
        <div className="navbar bg-secondary">
            <div className="container-fluid d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li>
                        <select className="form-control form-control-sm">
                            <option>
                                Floor 1
                            </option>
                            <option>
                                Floor 2
                            </option>
                            <option>
                                Floor 3
                            </option>
                        </select>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Zone A</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Zone B</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Zone C</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default ParkingZone;

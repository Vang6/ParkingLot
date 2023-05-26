import React, { useState } from "react";
import { FloorObject, FloorMapName } from "schema";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, addDoc, getFirestore, deleteDoc, doc } from "firebase/firestore";
import { db, CollectionName, firebaseApp } from "../firebase";
import { WideLayout } from "components/common/floor_layout";

const ParkingZone = () => {
    const [floorLayout, setFloorLayout] = useState<FloorMapName>();
    const floorCollectionsRef = collection(db, CollectionName.floor)
    const [floorDataSet, floorDataSetInProgress, floorDataSetError] = useCollection(floorCollectionsRef);
    const floorChangeHandler = (e: any) => {
        console.log(e.target.value);
    }
    return <div>
        <div className="navbar bg-secondary">
            <div className="container-fluid d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li>
                        <select className="form-control form-control-sm" onChange={floorChangeHandler}>
                            {
                                floorDataSet?.docs.map((el: any) => {
                                    const crData = el.data();
                                    return <option value={el.id}>{crData.name}- {crData.index} Floor</option>
                                })
                            }
                        </select>
                    </li>
                </ul>
            </div>
        </div>
        <div className="layout-container">
            <WideLayout/>

        </div>
    </div>
}
export default ParkingZone;

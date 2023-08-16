import React, { useEffect, useState } from "react";
import { FloorObject, FloorMapName } from "schema";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, addDoc, getFirestore, deleteDoc, doc } from "firebase/firestore";
import { db, CollectionName, firebaseApp } from "../firebase";
import { SmallLayout, WideLayout, GeneralLayout } from "components/common/floor_layout";

const ParkingZone = () => {
    const [fId, setFId] = useState<string | null>(null);
    const [floorLayout, setFloorLayout] = useState<FloorMapName>(FloorMapName.Small);
    const floorCollectionsRef = collection(db, CollectionName.floor)
    const [floorDataSet, floorDataSetInProgress, floorDataSetError] = useCollection(floorCollectionsRef);
    const floorChangeHandler = (e: any) => {
        console.log(e.target.value);
        const found = floorDataSet?.docs.find((el: any) => {
            return el.id === e.target.value;
        })
        if (found && found.data()) {
            setFId(found.id);
            setFloorLayout(found.data().layout)
        }
    }
    useEffect(() => {
        const flData = floorDataSet?.docs.map((el: any) => el.data())
        flData && flData[0].id && setFId(flData[0].id);
    }, [])

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
            {floorLayout === FloorMapName.Small && <SmallLayout />}

            {floorLayout === FloorMapName.General && <GeneralLayout />}

            {floorLayout === FloorMapName.Wide && <WideLayout />}
        </div>
    </div>
}
export default ParkingZone;

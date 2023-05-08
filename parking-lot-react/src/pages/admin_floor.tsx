import React, { useState } from "react";
import { FloorObject, FloorMapName } from "schema";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./../firebase/firebase.config";
import { CollectionName } from "../firebase/collection.config";
const AdminFloor = () => {
    const floorCollectionsRef = collection(db, CollectionName.floor)
    const [editableFloorObject, setEditableFloorObject] = useState<FloorObject>({
        index: 0,
        name: '',
        layout: FloorMapName.General,
        note: '',
        prefix: 'zone'
    })

    const editHandler = (e: any) => {
        switch (e.currentTarget.name) {
            case 'floorNumber':
                setEditableFloorObject({ ...editableFloorObject, ...{ index: e.currentTarget.value } })
                break;
            case 'floorName':
                setEditableFloorObject({ ...editableFloorObject, ...{ name: e.currentTarget.value } })
                break;
            case 'floorLayout':
                setEditableFloorObject({ ...editableFloorObject, ...{ layout: e.currentTarget.value } })
                break;
            case 'floorNote':
                setEditableFloorObject({ ...editableFloorObject, ...{ note: e.currentTarget.value } })
                break;
            case 'floorPrefix':
                setEditableFloorObject({ ...editableFloorObject, ...{ prefix: e.currentTarget.value } })
                break;
        }
        console.log(e.currentTarget.name);
    }
    const createFloorAction = async () => {
        
        await addDoc(floorCollectionsRef, editableFloorObject)
    }
    return <div className="px-3 py-3">
        <h2> Floor Management </h2>
        {/* <pre>{JSON.stringify(editableFloorObject, undefined, 3)}</pre> */}
        <div className="row">
            <div className="col-md-6">
                <h4> Create </h4>
                <div>
                    <div className="form-floating mb-3">
                        <input value={editableFloorObject.index} name="floorNumber" onChange={editHandler} type="number" className="form-control form-control-sm" placeholder="please enter proper index" />
                        <label>Floor Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={editableFloorObject.name} name="floorName" onChange={editHandler} type="text" className="form-control form-control-sm" placeholder="please enter proper floor name" />
                        <label>Floor Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={editableFloorObject.note} name="floorNote" onChange={editHandler} type="text" className="form-control form-control-sm" placeholder="please enter proper floor note" />
                        <label>Floor Note</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={editableFloorObject.prefix} name="floorPrefix" onChange={editHandler} type="text" className="form-control form-control-sm" placeholder="please enter proper floor prefix" />
                        <label>Floor Prefix</label>
                    </div>
                    <div>
                        <select value={editableFloorObject.layout} name="floorLayout" onChange={editHandler} className="form-control form-control-sm">
                            <option value={FloorMapName.General}>{FloorMapName.General}</option>
                            <option value={FloorMapName.Wide}>{FloorMapName.Wide}</option>
                            <option value={FloorMapName.Small}>{FloorMapName.Small}</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <div>
                        <button onClick={createFloorAction} className="btn btn-sm btn-success"> Create </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6"> 2 </div>
        </div>
    </div>
}
export default AdminFloor;

import React from "react";
import { ParkingRowAlignment } from "schema";
import Car from "./car/car";
import ParkingRow from "./parking_row";
const GeneralLayout = () => { 
    const carIdsA = [];
    for (let i= 0; i<5; i++){
        carIdsA.push(`GL${i+1000}`)
    }
    return <div>
        <div style={{width:'550px', height:'400px'}}>
            <h2>General</h2>
            <div>
                <ParkingRow carIds={carIdsA} alignment= {ParkingRowAlignment.Verical}/>
                <ParkingRow carIds={carIdsA} alignment= {ParkingRowAlignment.Verical}/>
                <ParkingRow carIds={carIdsA} alignment= {ParkingRowAlignment.Verical}/>

            </div>
        </div>
    </div>
}
export default GeneralLayout;

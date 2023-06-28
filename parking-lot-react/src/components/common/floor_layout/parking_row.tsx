import React from "react";
import { ParkingRowAlignment, ParkingRowParameters } from "schema";
import Car from "./car/car";
const ParkingRow = (props: ParkingRowParameters) => {
    const wv = 150;
    const hv = 66;
    return <>
        {props.alignment === ParkingRowAlignment.Verical && <div className="v-row" style={{ height: `${hv * props.carIds.length}px` }}>
            {props.carIds.map(() => {
                return <Car occupied={true} face={'left'} />
            })}
        </div>

        }
    </>
}
export default ParkingRow;

import React from "react";
import { ParkingRowAlignment, ParkingRowParameters } from "schema";
import Car from "./car/car";
const ParkingRow = (props: ParkingRowParameters) => {
    const wv = 150;
    const hv = 66;
    return <>
        {props.alignment === ParkingRowAlignment.Verical && <div className="v-row" style={{ height: `${hv * props.carIds.length}px`, marginRight: '3rem', paddingRight: '6rem' }}>
            {props.carIds.map((el, i) => {
                return <Car occupied={props.occupied[i]} face={'left'} positionId="AQWS" />
            })}
        </div>

        }
    </>
}
export default ParkingRow;

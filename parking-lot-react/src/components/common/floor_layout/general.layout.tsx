import React, { useEffect, useState } from "react";
import { ParkingRowAlignment } from "schema";
import Car from "./car/car";
import ParkingRow from "./parking_row";
const GeneralLayout = () => {
    const numOfCols = 7;
    const numOfRows = 10;
    const [floorIds, setFloorIds] = useState<string[][]>([]);

    useEffect(() => {
        const fIds: string[][] = [];
        for (let c = 0; c < numOfCols; c++) {
            const ids = [];
            for (let r = 0; r < numOfRows; r++) {
                ids.push(`Zone${c}_${r}`);
            }
            fIds.push(ids);
        }
        setFloorIds(fIds);
    }, [])
    return <div>
        <div style={{ width: `${numOfCols*145}px`, height: '400px' }}>
            <div>
                {floorIds.map((floorIdSets) => {
                    return <ParkingRow occupied={[]} carIds={floorIdSets} alignment={ParkingRowAlignment.Verical} />

                })}
            </div>
        </div>
    </div>
}
export default GeneralLayout;

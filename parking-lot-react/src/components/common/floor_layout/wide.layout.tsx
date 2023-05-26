import React from "react";
import Car from "./car/car";
const WideLayout = () => { 

    const generateCars = () => { 
        const arr= [];
        for (let i=0; i<200; i++){
            arr.push(<Car occupied={false} face="top"/>);
        }
        return arr;
    }
    return <div>
        <div style={{width:'550px', height:'400px'}}>
        {generateCars()}
        </div>
    </div>
}
export default WideLayout;

import React, { useState } from "react";
import ApplicationContext from "./application.context";
import { ApplicationMasterState } from "schema";

const ApplicationProvider = (props: {children: any}) => {

    const [appState, setAppstate] = useState<ApplicationMasterState>({
        sideBarParams: {
            menuOpen: false
        }
    });
    const toggleMenu= () => {
        const modfAppState= {...appState};
        modfAppState.sideBarParams.menuOpen= !modfAppState.sideBarParams.menuOpen;
        setAppstate(modfAppState); 
    }

    return <ApplicationContext.Provider value={{appState, toggleMenu}}>
        {props.children}
    </ApplicationContext.Provider>
}
export default ApplicationProvider;

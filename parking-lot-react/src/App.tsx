import React from "react";
import ApplicationProvider from "global_store/application.provider";
import SideBar from "./components/common/sidebar.component";
import NavBar from "components/common/navbar.component";
import AppRouter from "./router";
const App = () => {
    const menuClickHandler = () => {
        console.log("ABD")
    } 
    return <ApplicationProvider> <div>
        <SideBar/>
         <NavBar onMenuClick={menuClickHandler}/> 
        <AppRouter/>
    </div>
    </ApplicationProvider>
}
export default App;

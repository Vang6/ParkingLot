import React from "react";
import ApplicationProvider from "global_store/application.provider";
import AppRouter from "./router";
import './App.css';
const App = () => {
    return <ApplicationProvider>
        <div>
            <AppRouter />
        </div>
    </ApplicationProvider>
}
export default App;

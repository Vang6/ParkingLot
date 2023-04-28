import React from "react";
import SideBar from "components/common/sidebar.component";
import NavBar from "components/common/navbar.component";
const Page = (props: any) => {
    return <>
        <SideBar />
        <NavBar />
        <div className="page-container"> {props.children}</div>
    </>
}
export default Page;

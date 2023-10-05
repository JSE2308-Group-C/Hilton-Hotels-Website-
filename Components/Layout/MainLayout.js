import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

function MainLayout({children}, props) {
    return (
        <Fragment>
            <nav>
                <MainNavigation/>
            </nav>
            <main>{children}</main>
        </Fragment>
    )
}

export default MainLayout
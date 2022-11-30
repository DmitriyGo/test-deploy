import React, {FC} from "react";
import {Link, Outlet} from "react-router-dom";

interface LayoutProps {
}

type Props = LayoutProps;

const Layout: FC<Props> = ({}) => {
    return (
        <>
            <nav>
                <div style={{display: "flex", justifyContent: 'space-evenly'}}>
                    <Link to='/'>Home</Link>
                    <Link to='/asd'>Asd</Link>
                    <Link to='/qwe'>Qwe</Link>
                </div>
            </nav>
            <body>
                <Outlet/>
            </body>
        </>
    );
};

export default Layout;
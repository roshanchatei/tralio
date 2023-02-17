import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import DashboardNavbar from "../Navbar/DashboardNavbar";
import LandingNavbar from "../Navbar/LandingNavbar";
import Navbar from "../Navbar/Navbar";
import {useRouter} from "next/router";
import Footer from "../Footer/Footer";

const CustomLayout = ({ children, setDashboardPage, isLoggedIn }) => {

    const Router = useRouter();
    const path = Router.pathname;

    return (
        <>

            {
                path === '/' ? <DashboardNavbar setDashboardPage={setDashboardPage} /> : path === '/home' ? <LandingNavbar  /> : <Navbar setDashboardPage={setDashboardPage} />
            }

            {/*{!isLoggedIn ? <LandingNavbar  /> : path === '/' ? <DashboardNavbar setDashboardPage={setDashboardPage} /> :  path === '/portfolio' ? '' : <Navbar setDashboardPage={setDashboardPage} />}*/}

            {/*if ur components are going inside navbar then insert <Box mt={8}/> before it*/}
            <Box width={'100%'}>
                { children }
            </Box>

            {path === '/portfolio' ? '' : <Footer />}
        </>
    );
};




export default CustomLayout;

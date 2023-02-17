import { useEffect, useRef, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuButton from "../MenuButton/MenuButton";
import {useRouter} from "next/router";

const Navbar = ({setDashboardPage}) => {

    const Router = useRouter()

    // const [onTop, setOnTop] = useState(true);
    // const navRef = useRef();
    //
    // useEffect(() => {
    //     const position = navRef.current.offsetTop;
    //     window.onscroll = function () {
    //         if (window.pageYOffset > position) {
    //             setOnTop(false);
    //         } else {
    //             setOnTop(true);
    //         }
    //     };
    // });

    return (
        <>
            <AppBar
                color={'transparent'}
                elevation={1}
                position="fixed"
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    p={1}
                    bgcolor={'#317CEB'}
                    color={'#FFF'}
                >
                    <Box display={'flex'} alignItems={'center'} sx={{cursor: 'pointer'}} onClick={() => {
                        window.location.href = '/';
                    }}>
                        <IconButton>
                            <ArrowBackIcon sx={{color: '#FFF'}} />
                        </IconButton>
                        <Hidden mdDown>
                            <Box ml={1} fontSize={'20px'} fontWeight={600}>
                                Back to Dashboard
                            </Box>
                        </Hidden>
                    </Box>
                </Box>
            </AppBar>
        </>
    );
};




export default Navbar;

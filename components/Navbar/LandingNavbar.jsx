import { useEffect, useRef, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Link from "../Layouts/Link"
import Logo from "/public/images/Logos/logo.svg"
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import {createStyles, makeStyles} from "@mui/styles";
import Pop from "../LoginSignupPop/LoginSignupPop";

const useStyles = makeStyles(() =>
    createStyles({
        backDrop: {
            backdropFilter: "blur(3px)",
            backgroundColor:'rgba(0,0,30,0.4)'
        },
    }),
);

const LandingNavbar = () => {
    const classes = useStyles();

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

    const [pop, setPop] = useState(false);

    const handleClick = (event) => {
        setPop(true);
    };

    const handleClose = () => {
        setPop(false);
    };

    return (
        <>
            <AppBar
                color={'transparent'}
                elevation={0}
                position="absolute"
            >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={1}>
                    <Box component={Link} noLinkStyle href="/" width={'120px'} height={'41px'}>
                        <Image src={Logo} alt={'logo'} />
                    </Box>
                    <Button
                        variant={'contained'}
                        onClick={handleClick}
                        sx={{
                            padding: {lg: '5px 44px', md: '5px 44px', sm: '5px 34px', sx: '5px 27px'},
                            background: '#1981FF',
                        }}
                    >
                        Login
                    </Button>
                    <Dialog
                        open={pop}
                        onClose={handleClose}
                        BackdropProps={{
                            classes: {
                                root: classes.backDrop,
                            },
                        }}
                    >
                        <Pop initial={0} />
                    </Dialog>
                </Box>
            </AppBar>
        </>
    );
};

export default LandingNavbar;

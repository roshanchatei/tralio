import {useState, useRef} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PagesIcon from '@mui/icons-material/Pages';
import BarChartIcon from '@mui/icons-material/BarChart';
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function DashboardMenu({setCurrentStage}) {

    const Router = useRouter();
    const [value, setValue] = useState('Filter');

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleCloseMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event?.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleToggle} ref={anchorRef} variant="outlined" startIcon={<KeyboardArrowDownIcon />}>
                {value}
            </Button>
            <Popper
                anchorEl={anchorRef.current}
                disablePortal
                open={open}
                placement={'bottom-start'}
                role={undefined}
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'top' ? 'center top' : 'center top' }}
                    >
                        <Paper sx={{p: 0.5, bgcolor: '#282828', color: '#fff'}} onClick={handleCloseMenu}>
                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList autoFocusItem={open}>
                                    <MenuItem onClick={() => {
                                        setCurrentStage(1);
                                        setValue('My Posts')
                                    }}>
                                        <DynamicFeedIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'My Posts'}</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                        setCurrentStage(2);
                                        setValue('My Portfolios')
                                    }}>
                                        <PagesIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'My Portfolios'}</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                        setCurrentStage(3);
                                        setValue('Activity')
                                    }}>
                                        <BarChartIcon/>
                                        <Box mr={1.5} />
                                        <Typography variant={'subtitle2'}>{'Activity'}</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Avatar from "@mui/material/Avatar";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useRemoteUser } from "../../store/UserContext";
import {cookieStorage} from "../../apis/rest.app";

export default function MenuButton({ setDashboardPage }) {

  const [remoteUser, setRemoteUser] = useRemoteUser();
  const Router = useRouter();
  const path = Router.pathname;

  // console.log('Remote USer from menu', remoteUser);
  const userInitial = remoteUser?.firstname[0];

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleLogout = () => {
    cookieStorage.clear()
    localStorage.removeItem("access-token");
    Router.reload();
  };

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
      <Avatar onClick={handleToggle} ref={anchorRef}>
        {userInitial}
      </Avatar>
      <Popper
        anchorEl={anchorRef.current}
        disablePortal
        open={open}
        placement={"bottom-end"}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "top" ? "center top" : "center top",
            }}
          >
            <Paper sx={{ p: 0.5 }} onClick={handleCloseMenu}>
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <MenuList autoFocusItem={open}>
                  <MenuItem
                    onClick={() => {
                      if (path !== "/") {
                        Router.push("/");
                      }
                      setDashboardPage(3);
                    }}
                  >
                    <AccountCircleIcon />
                    <Box mr={1.5} />
                    <Typography variant={"subtitle2"}>{"Profile"}</Typography>
                  </MenuItem>
                  {/*<MenuItem*/}
                  {/*  onClick={() => {*/}
                  {/*    Router.push("/settings");*/}
                  {/*  }}*/}
                  {/*>*/}
                  {/*  <SettingsIcon />*/}
                  {/*  <Box mr={1.5} />*/}
                  {/*  <Typography variant={"subtitle2"}>{"Settings"}</Typography>*/}
                  {/*</MenuItem>*/}
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon />
                    <Box mr={1.5} />
                    <Typography variant={"subtitle2"}>{"Logout"}</Typography>
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

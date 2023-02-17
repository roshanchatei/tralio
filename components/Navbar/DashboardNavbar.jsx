import { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { createStyles, makeStyles } from "@mui/styles";
import Link from "../Layouts/Link";
import Image from "next/image";
import Logo from "../../public/images/Logos/logo.svg";
import LogoWhite from "../../public/images/Logos/logoWhite.svg";
import MenuButton from "../MenuButton/MenuButton";
import { useRouter } from "next/router";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      fontSize: "20px",
      marginRight: "30px",
      "&:hover,&:focus": {
        fontWeight: "600",
      },
      cursor: "pointer",
    },
  })
);

const DashboardNavbar = ({ setDashboardPage }) => {
  const classes = useStyles();
  const Router = useRouter();

  const [mobOpen, setMobOpen] = useState(false);
  const handleMobDrawer = () => {
    setMobOpen(!mobOpen);
  };

  const [onTop, setOnTop] = useState(true);
  const navRef = useRef();

  useEffect(() => {
    const position = navRef.current.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > position) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    };
  });

  const drawerWidth = 240;
  const appbarHeight = 55;

  const handleLogout = async () => {
    localStorage.removeItem("access-token");
    await Router.push('/home');
  };

  const tabs = [
    {
      id: "Home",
      value: 0,
    },
    {
      id: "Portfolio",
      value: 1,
    },
    {
      id: "Posts",
      value: 2,
    },
    // {
    //     id: 'Tracker',
    //     value: 7,
    // },
  ];

  return (
    <>
      <AppBar
        color={"transparent"}
        ref={navRef}
        elevation={!onTop ? 4 : 0}
        position="fixed"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={1}
          bgcolor={!onTop ? "#317CEB" : ""}
          color={!onTop ? "#FFF" : "#317CEB"}
        >
          <Hidden mdUp>
            <IconButton
              onClick={() => {
                setMobOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              onClick={() => {
                setDashboardPage(0);
              }}
              width={"120px"}
              height={"41px"}
              mr={4}
            >
              <Image src={onTop ? Logo : LogoWhite} alt={"logo"} />
            </Box>
            <Hidden mdDown>
              <Box mr={10} />
              {tabs.map((each) => (
                <Box
                  key={each.id}
                  className={classes.tab}
                  onClick={() => {
                    setDashboardPage(each.value);
                  }}
                >
                  {each.id}
                </Box>
              ))}
            </Hidden>
          </Box>
          <Hidden mdUp>
            <Box />
          </Hidden>
          <Hidden mdDown>
            <MenuButton setDashboardPage={setDashboardPage} />
          </Hidden>
        </Box>
      </AppBar>

      {/*==========================================*/}

      <Drawer open={mobOpen} onClose={handleMobDrawer}>
        <Box display={"flex"} width={drawerWidth}>
          <List>
            <ListItem
              component={Box}
              px={2}
              display={"flex"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                component={Link}
                href={"/"}
                onClick={handleMobDrawer}
                height={appbarHeight}
              >
                <Box
                  width={"80px"}
                  height={"35px"}
                  mt={1}
                  onClick={() => {
                    setDashboardPage(0);
                  }}
                >
                  <Image src={Logo} alt={"logo"} />
                </Box>
              </Box>
              <Box ml={12} />
              <div>
                <IconButton onClick={handleMobDrawer}>
                  <CloseIcon />
                </IconButton>
              </div>
            </ListItem>
            <Box mt={1} />
            {tabs.map((each, index) => (
              <ListItem key={each.id}>
                <Box ml={1} />
                <Button
                  onClick={() => {
                    setDashboardPage(each.value);
                  }}
                >
                  {each.id}
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <Box ml={1} />
              <Button
                onClick={() => {
                  setDashboardPage(3);
                }}
              >
                Profile
              </Button>
            </ListItem>
            <ListItem>
              <Box ml={1} />
              <Button
                onClick={() => {
                  window.location.href="/settings";
                }}
              >
                Settings
              </Button>
            </ListItem>
            <ListItem>
              <Box ml={1} />
              <Button onClick={handleLogout}>Logout</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DashboardNavbar;

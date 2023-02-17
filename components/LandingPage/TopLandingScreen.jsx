import { useState } from "react";
import Image from "next/image";
import SideImage from "../../public/images/mainSidePic.svg";
import styles from "./TopLandingScreen.module.css";
import Pop from "../LoginSignupPop/LoginSignupPop";
import { Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { createStyles, makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() =>
  createStyles({
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,30,0.4)",
    },
  })
);

function TopLandingScreen() {
  const classes = useStyles();

  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setPop(true);
  };

  const handleClose = () => {
    setPop(false);
  };
  return (
    <div className={styles.bg_color}>
      <Container maxWidth={"lg"}>
        <div className={styles.bg}>
          <div className={styles.leftText}>
            <div>
              <h1 className={styles.heading}>BUILD. SHARE. MANAGE.</h1>
              <p className={styles.desc}>
                Design customizable resume portfolios and showcase your skills.
                Share what you have learned with the rest of the world
              </p>
              <Button
                variant={"contained"}
                onClick={handleClick}
                sx={{
                  mt:"10px",
                  padding: {
                    lg: "5px 37px",
                    md: "5px 37px",
                    sm: "5px 30px",
                    sx: "5px 27px",
                  },
                  background: "#1981FF",
                }}>
                Join Us &rarr;
              </Button>
              <Dialog
                open={pop}
                onClose={handleClose}
                BackdropProps={{
                  classes: {
                    root: classes.backDrop,
                  },
                }}>
                <Pop initial={1} />
              </Dialog>
            </div>
          </div>
          <div className={styles.imgSize}>
            <Image src={SideImage} alt="Pic" width={650} height={650} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopLandingScreen;

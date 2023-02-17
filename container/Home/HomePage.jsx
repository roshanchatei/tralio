import Head from "next/head";
import { useState } from "react";
import styles from "./HomePage.module.css";

// Components
import Pop from "../../components/LoginSignupPop/LoginSignupPop";
import DetailFeatures from "../../components/DetailFeatures/DetailFeatures";
import DetailSummary from "../../components/DetailSummary/DetailSummary";
import TopLandingScreen from "../../components/LandingPage/TopLandingScreen";

// Data Utilities
import homeDetailSummary from "../../TralioAPI/DetailSummary";
import homeDetailFeature from "../../TralioAPI/homeDetailFeature";

import Carousel from "../../components/Carousel/Carousel";

//Material UI
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

function HomePage() {
  const classes = useStyles();

  const [pop, setPop] = useState(false);

  const handleClick = (event) => {
    setPop(true);
  };

  const handleClose = () => {
    setPop(false);
  };

  const generateHomeDetailSummary = ({ id, images, heading, description }) => {
    return (
      <Container maxWidth={'lg'} key={"Home Summary " + id}>
        <DetailSummary
          id={id}
          images={images}
          heading={heading}
          description={description}
        />
      </Container>
    );
  };

  const generateHomeDetailFeature = ({
    id,
    left_icon,
    left_heading,
    left_description,
    right_icon,
    right_heading,
    right_description,
  }) => {
    return (
      <div key={"Home Feature" + id}>
        <DetailFeatures
          leftImages={left_icon}
          leftHeading={left_heading}
          leftDescription={left_description}
          rightImages={right_icon}
          rightHeading={right_heading}
          rightDescription={right_description}
        />
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Tralio</title>
        <link
        rel="stylesheet"
        type="text/css"
        charSet="utf-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      </Head>
      <TopLandingScreen />
      <Container maxWidth="lg" className={styles.increase_padding}>
        {homeDetailSummary.map(generateHomeDetailSummary)}
      </Container>
      <div className={styles.testimonial} >
        <div className={styles.testimonial_start}>
          <h2>People who love are services</h2>
        </div>
        <Carousel />
      </div>
      <Container className={styles.increase_padding}>
        <div className={styles.feature_start}>
          <h2>Take a look at what we have to offer </h2>
        </div>
        {homeDetailFeature.map(generateHomeDetailFeature)}
        <div className={styles.profBox}>
          <p className={styles.profile}>Flourish your profile online</p>
            <Button
                variant={'contained'}
                onClick={handleClick}
                sx={{
                    padding: {lg: '10px 44px', md: '10px 44px', sm: '5px 34px', sx: '5px 27px'},
                    background: '#1981FF',
                }}
            >
                Build Now
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
            <Pop initial={1} />
          </Dialog>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

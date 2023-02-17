import Link from "../Layouts/Link";
import Logo from "/public/images/Logos/logo.svg";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import footerData from "./footerData";
import {
  Hidden,
  Divider,
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const Footer = () => {
  const generateMobileFooter = (e) => {
    return (
      <Grid key={"footer mobile" + e.title} item sm={12} md={2} xs={12}>
        <Accordion
          sx={{ background: "transparent", boxShadow: "0", color: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              {e.title}
            </Typography>
          </AccordionSummary>
          {e.content.map((data) => (
            <Box key={data.head}>
              <AccordionDetails
                sx={{ pl: 4, pb: 1, color: "#e2e2e2" }}
              >
                <Typography>{data.head}</Typography>
              </AccordionDetails>
              <Divider sx={{ mb: 1 }} />
            </Box>
          ))}
        </Accordion>
      </Grid>
    );
  };
  const generateDesktopFooter = (e) => {
    return (
      <Grid key={"footer Desktop" + e.title} item sm={12} md={2} xs={12}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={{ lg: "left", md: "left", sm: "center", xs: "center" }}
          mt={3}
        >
          <Box fontSize={"20px"} fontWeight={"700"}>
            {e.title}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            mt={2}
            fontWeight={300}
          >
            {e.content.map((data) => (
              <Link
                key={"Footer data" + data.head}
                underline="hover"
                color="inherit"
                href={data.href}
                sx={{ marginBottom: 2 }}
              >
                {data.head}
              </Link>
            ))}
          </Box>
        </Box>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
      }}
      color={"#FFF"}
      p={{ lg: 6, md: 5, sm: 4, xs: 1 }}
      // width={"100%"}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              mt={{ lg: 5, md: 3, sm: 2, xs: 2 }}
              textAlign={{
                xs: "center",
              }}>
              <Box
                component={Link}
                noLinkStyle
                href="/"
                width={"120px"}
                height={"41px"}>
                <Image src={Logo} alt={"logo"} />
              </Box>
              <Box pr={{ lg: 6, md: 5, sm: 0, xs: 0 }} mt={1}>
                Tralio provides progressive, and affordable,
                accessible on mobile and online for everyone
              </Box>
              {/* <Hidden mdDown> */}
                <Box mt={3}>
                  Coded with ❤ and ☕ by IoT LAB, KIIT
                </Box>
              {/* </Hidden> */}
              {/* <Hidden mdUp>
                <Box mt={5} />
              </Hidden> */}
            </Box>
          </Grid>
          {/* <Hidden mdDown>{footerData.map(generateDesktopFooter)}</Hidden>
          <Hidden mdUp>{footerData.map(generateMobileFooter)}</Hidden> */}
        </Grid>
        {/* <Hidden mdUp>
          <Box mt={3} textAlign={"center"}>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Box>
        </Hidden> */}
      </Container>
    </Box>
  );
};

export default Footer;

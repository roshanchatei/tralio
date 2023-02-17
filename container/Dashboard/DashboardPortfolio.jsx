import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Bg from "../../public/backgrounds/portfolio1.jpg";

export default function DashboardPortfolio() {
  return (
    <>
      <BackgroundSearch
        color={"#6a6a6a"}
        head={
          "If you're waiting until you feel talented enough to make it, you'll never make it."
        }
        src={"/backgrounds/dashboardBg1.jpg"}
      />
      <Container maxWidth={"lg"}>
          <Box mt={10} p={4} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'} width={'100%'} borderRadius={'10px'}>
              <Box width={'100%'}>
                  <Box fontWeight={700} fontSize={'30px'} textAlign={'center'} p={5}>
                      Portfolios
                  </Box>
                  <Grid container spacing={4}>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box width={'100%'} display={'flex'} borderRadius={'15px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'} overflow={'hidden'}>
                              <Box width={'50%'}>
                                  <Image src={Bg} alt={'Bg'} />
                              </Box>
                              <Box width={'50%'} display={'flex'} alignItems={'flex-start'} justifyContent={'center'} flexDirection={'column'} pl={10} position={'relative'}>
                                  <Box position={'absolute'} px={2} py={0.1} bgcolor={'#3086FD'} borderRadius={'10px'} bottom={15} right={15} color={'white'}>
                                      Default
                                  </Box>
                                  <Box display={'flex'} alignItems={'center'}>
                                      <Box bgcolor={'#fdb506'} height={'15px'} width={'15px'} />
                                      <Box mr={1} />
                                      <Box color={'#fdb506'} fontWeight={600}>
                                          Yellow
                                      </Box>
                                  </Box>
                                  <Box mb={1} />
                                  <Box display={'flex'} alignItems={'center'}>
                                      <Box bgcolor={'#000'} height={'15px'} width={'15px'} />
                                      <Box mr={1} />
                                      <Box color={'#000'} fontWeight={600}>
                                          Black
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                      </Grid>

                  </Grid>
              </Box>
          </Box>
      </Container>
      <Box mt={10} />
    </>
  );
}

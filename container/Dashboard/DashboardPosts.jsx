import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function DashboardPosts() {
  return (
    <>
      <BackgroundSearch
        color={"#fff"}
        head={"A little progress each day adds up to big achievements."}
        src={"/backgrounds/dashboardBg2.jpg"}
      />
      <Container maxWidth={"lg"}>Dashboard posts</Container>
      <Box mt={100} />
    </>
  );
}

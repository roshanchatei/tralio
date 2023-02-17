import { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Avatar, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useRemoteUser} from "../../store/UserContext";

export default function Profile(props) {
  const [remoteUser, setRemoteUser] = useRemoteUser()
  return (
    <>
      <Box mt={8} />
      <Container maxWidth={"lg"}>
        <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={10}>
            <Avatar sx={{ height: {sm: 200, xs: 100}, width: {sm: 200, xs: 100}, fontSize: {sm: 100, xs: 50} }}>
              {remoteUser?.firstname[0]}
            </Avatar>
            <Typography variant="h5" fontSize={30} py={2}>
              {remoteUser?.firstname + " " + remoteUser?.lastname}
            </Typography>
            <Button
                disabled
              variant="contained"
              sx={{ px: 6, fontSize: 13 }}
              onClick={() => {
                window.location.href = "/settings";
              }}>
              Settings <EditIcon sx={{ ml: 1 }} fontSize="small" />
            </Button>
          </Box>
          <Box mr={8} />
          <Box p={{ xs: 2, md: 8 }} width={"100%"}>
            <Box mt={4} />
            <Typography
              variant="h6"
              p={2}
              backgroundColor="#1981FF"
              color="white"
              sx={{borderRadius: '10px 10px 0 0'}}
            >
              Profile Information
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>Username</Typography>
              <Typography>{remoteUser?.username}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>Email</Typography>
              <Typography>{remoteUser?.email}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>Gender</Typography>
              <Typography>{remoteUser?.gender === 1 ? "Male" : remoteUser?.gender === 2 ? "Female" : "Others"}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>Phone</Typography>
              <Typography>{remoteUser?.phone}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box mb={10} />
    </>
  );
}

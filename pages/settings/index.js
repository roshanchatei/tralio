import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Avatar, TextField, Container } from "@mui/material";
const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: "50%",
    width: 200,
    height: 200,
    "&:hover": {
      background: "rgb(7, 177, 77, 0.42)",
    },
  },
});
export default function Settings() {
  const classes = useStyles();
  const [style, setStyle] = useState({ display: "none" });
  const data = {
    id: 1,
    username: "Something",
    firstname: "Manisa",
    lastname: "Basak",
    userEmail: "something@g.com",
    userPassword: "poklkop",
    gender: "female",
  };
  const [edit, setEdit] = useState(true);
  const [settingsData, setSettingsData] = useState(data);
  const [profileImg, setProfileImg] = useState(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"
  );
  const settings = [
    {
      type: "text",
      name: "username",
      placeholder: "User Name",
      value: data.username,
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      type: "text",
      name: "firstname",
      placeholder: "First Name",
      value: data.firstName,
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      type: "text",
      name: "lastname",
      placeholder: "Last Name",
      value: data.lastName,
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      type: "email",
      name: "userEmail",
      placeholder: "Email",
      value: data.email,
      validation: {
        required: true,
        isEmail: true,
      },
    },
    {
      type: "password",
      name: "userPassword",
      placeholder: "Password",
      value: data.password,
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
  ];
  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({
      ...settingsData,
      [name]: value,
    });
    // console.log(settingsData);
  };
  const settingsMap = settings.map((input) => {
    return (
      <Box key={input.name} p={1}>
        <TextField
          fullWidth
          name={input.name}
          label={input.placeholder}
          id="outlined-basic"
          value={settingsData[input.name]}
          type={input.type}
          disabled={edit}
          variant="outlined"
          onChange={handleSettingsChange}
        />
      </Box>
    );
  });
  const handleClickSave = () => {
    setEdit(true);
  };
  const handleClickCancel = () => {
    setEdit(true);
  };
  const handleClickImg = () => {};
  return (
    <Container>
      <Box p={{ sm: 2, xs: 0 }} mt={8} textAlign={"center"}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}>
          <Box>
            <Avatar sx={{ height: 200, width: 200, fontSize: 100 }}>
              {data.firstname[0]}
            </Avatar>
          </Box>
          <Box width={"100%"} p={{ sm: 4, xs: 0 }} py={{ sm: 0, xs: 2 }}>
            {settingsMap}
          </Box>
        </Box>
        <Box
          display={"flex"}
          px={{ sm: 4, xs: 0 }}
          justifyContent="flex-end"
          flexDirection={{ xs: "column", sm: "row" }}>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => {
              setEdit(false);
              // console.log(settingsData);
            }}>
            Edit
          </Button>
          <Button variant="contained" sx={{ m: 1 }} onClick={handleClickSave}>
            Save
          </Button>
          <Button variant="contained" sx={{ m: 1 }} onClick={handleClickCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
      <Box mt={100} />
    </Container>
  );
}

import { useState } from "react";
import { userPortfolio } from "../../TralioAPI/tralio";

// MUI Material Basic Components
import {
  Box,
  Container,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  TextField,
  Grid,
  Hidden,
} from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
// MUI imports for Date Support
import {
  // AdapterDateFns,
  DatePicker,
  LocalizationProvider,
} from "@mui/lab";

// todo: Adding AdapterDateFns in above import creates an error,
// Why ??? I don't know, hence alag se import hai
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Portfolio Forms Template
import {
  portfolioFields,
  portfolioButtons,
  addFeature,
} from "../../TralioAPI/portfolioForm";

const useStyles = makeStyles(() =>
  createStyles({
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,30,0.4)",
    },
  })
);

// Declared outside the function to avoid re-initialization
const tempPortfolioFields = JSON.parse(JSON.stringify(portfolioFields));
let currentIndex = 1;

export default function UpdatePortfolioData() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [pop, setPop] = useState(false);

  const [portfolioData, setPortfolioData] = useState({
    Profile: {},
    Educations: {},
    Skills: {},
    Projects: {},
    Experiences: {},
    Courses: {},
    Organisations: {},
    Interests: {},
    Awards: {},
  });
  const [portfolioFormName, setPortfolioFormName] = useState("Profile");

  const [currentPortfolioForm, setCurrentPortfolioForm] = useState(
    tempPortfolioFields["Profile"]
  );

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}_${Math.random() * 1000000}`;
  };

  function handleCurrentPortfolioForm(formName) {
    setCurrentPortfolioForm(tempPortfolioFields[formName]);
    setPortfolioFormName(formName);
    setPop(false);
  }

  const handlePortfolioDataChange = (e, index) => {
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      [portfolioFormName]: {
        ...portfolioData[portfolioFormName],
        [name]: value,
      },
    });
  };

  const handleDateChange = (newDate, name) => {
    setPortfolioData({
      ...portfolioData,
      [portfolioFormName]: {
        ...portfolioData[portfolioFormName],
        [name]: newDate,
      },
    });
    // console.log(portfolioData);
  };

  const generateDateField = (dateSettings) => {
    return (
      <DatePicker
        fullWidth
        views={["year", "month"]}
        label={dateSettings.placeholder}
        value={portfolioData[portfolioFormName][dateSettings]}
        minDate={new Date("2012-03-01")}
        maxDate={new Date("2023-06-01")}
        onChange={(date) => handleDateChange(date, dateSettings)}
        renderInput={(params) => (
          <TextField
            fullWidth
            sx={{
              pr: { md: 1, xs: 0 },
              py: { md: 0, xs: 1 },
            }}
            {...params}
            helperText={null}
          />
        )}
      />
    );
  };

  const generateFields = (input) => {
    const fieldName = input.name + String(currentIndex);
    if (input.type === "text") {
      return (
        <Box key={fieldName} width={"100%"}>
          <TextField
            fullWidth
            name={fieldName}
            label={input.placeholder}
            value={portfolioData[fieldName]}
            id="outlined-textarea"
            type="text"
            onChange={handlePortfolioDataChange}
          />
          <Box mt={2} />
        </Box>
      );
    } else if (input.type === "dual-date") {
      return (
        <Box
          key={fieldName}
          display={"flex"}
          name={fieldName}
          flexDirection={{ md: "row", xs: "column" }}
          width={"100%"}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {generateDateField(input.date1.name + String(currentIndex))}
            {generateDateField(input.date2.name + String(currentIndex))}
          </LocalizationProvider>
          <Box mt={2} />
        </Box>
      );
    } else if (input.type === "select") {
      return (
        <Box key={fieldName} width={"100%"}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {input.placeholder}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={fieldName}
              label={input.placeholder}
              onChange={handlePortfolioDataChange}>
              {input.options.map((option, index) => (
                <MenuItem
                  key={fieldName + "Skills Option " + index}
                  value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box mt={2} />
        </Box>
      );
    }
  };

  const generatePortfolioButtons = (buttonName) => {
    return (
      <Box
        key={generateKey("button" + buttonName)}
        sx={{ py: 1, mx: 1, textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: 150,
            p: 1,
          }}
          onClick={() => handleCurrentPortfolioForm(buttonName)}>
          {buttonName}
        </Button>
      </Box>
    );
  };
  function portfolioDataAssembler(portfolioData) {
    const finalResult = {};
    for (const portfolioFieldKey of Object.keys(portfolioData)) {
      const result = [];
      for (const key of Object.keys(portfolioData[portfolioFieldKey])) {
        const value = portfolioData[portfolioFieldKey][key];
        const num = key[key.length - 1] - 1;
        const newKey = key.slice(0, key.length - 1);
        result[num] = {
          ...result[num],
          [newKey]: value,
        };
      }
      finalResult[portfolioFieldKey] = result;
    }
    return finalResult;
  }
  const handleSave = async () => {
    const finalarray = portfolioDataAssembler(portfolioData);
    // console.log(finalarray);
    const response = await userPortfolio(finalarray);
    if (response.status >= 200 && response.status < 300) {
      const newData = await response.json();
      // console.log(newData);
    } else {
      const resError = await response.json();
      enqueueSnackbar(
        resError.error ? resError.error.message : "Something went wrong",
        {
          variant: "error",
        }
      );
    }
  };

  const handleDialogClose = () => {
    setPop(false);
  };

  const handleAddClick = () => {
    tempPortfolioFields[portfolioFormName] = tempPortfolioFields[
      portfolioFormName
    ].concat(portfolioFields[portfolioFormName]);

    setCurrentPortfolioForm(tempPortfolioFields[portfolioFormName]);
    // console.log(currentPortfolioForm);
    // console.log("data", portfolioData);
  };

  const handleDialogOpen = () => {
    setPop(true);
  };

  const AddSaveButton = () => {
    return (
      <Box sx={{ my: 3 }}>
        {addFeature.includes(portfolioFormName) ? (
          <Button sx={{ mr: 2 }} variant="contained" onClick={handleAddClick}>
            Add
          </Button>
        ) : (
          <Box />
        )}
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Box>
    );
  };

  return (
    <Grid container display={"flex"} justifyContent={"space-between"}>
      <Grid item xs={0} sm={3} md={2}>
        <Hidden smDown>
          <Box
            mt={12}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}>
            {portfolioButtons.map(generatePortfolioButtons)}
          </Box>
        </Hidden>
      </Grid>
      <Grid item mt={8} xs={12} sm={9} md={10}>
        <Container>
          <Hidden smUp>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Button
                variant={"contained"}
                onClick={handleDialogOpen}
                sx={{
                  padding: {
                    lg: "5px 44px",
                    md: "5px 44px",
                    sm: "5px 34px",
                    sx: "5px 27px",
                  },
                  my: 3,
                  background: "#1981FF",
                }}>
                Portfolio Fields
              </Button>
              {AddSaveButton()}
            </Box>
            <Dialog
              open={pop}
              onClose={handleDialogClose}
              BackdropProps={{
                classes: {
                  root: classes.backDrop,
                },
              }}>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Box
                  zIndex={1}
                  width={"500px"}
                  bgcolor={"white"}
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  pt={6}
                  pb={6}>
                  {portfolioButtons.map(generatePortfolioButtons)}
                </Box>
              </Box>
            </Dialog>
          </Hidden>
          <Box
            sx={{
              p: 2,
            }}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <h1>{portfolioFormName}</h1>
              <Hidden smDown>{AddSaveButton()}</Hidden>
            </Box>
            {currentPortfolioForm.map((dataFields, index) => {
              currentIndex = index + 1;
              return dataFields.map(generateFields);
            })}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(
    `api/${apiVersion}/portfolio/get-single-portfolio/62599a28438d9cc96fea0168`
  );
  const data = await res.json();
  // console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

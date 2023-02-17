import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../../store/PortfolioContext";
import {portfolioService} from "../../../apis/rest.app";

export default function AddEducation({selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [degree, setDegree] = useState('')
    const [school, setSchool] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const change = () => {
        const temp = remotePortfolio.Educations;
        temp.unshift({
            degree,
            school,
            city,
            country,
            startDate: from,
            endDate: to
        })
        return temp
    }
    const addEducationData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Educations: change()
        })
            .then((res) => {
                enqueueSnackbar('Education Card added successfully', { variant: 'success' });
                setRemotePortfolio(res);
                handleClose();
            })
            .catch((err) => {
                enqueueSnackbar(err.message, { variant: 'error' });
            });
    }

    return (
        <>
            <TextField
                onChange={(event) => {
                    setDegree(event.target.value);
                }}
                value={degree}
                fullWidth
                label={"Degree"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setSchool(event.target.value);
                }}
                value={school}
                fullWidth
                label={"School/University"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                value={city}
                fullWidth
                label={"City"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setCountry(event.target.value);
                }}
                value={country}
                fullWidth
                label={"Country"}
                type={"text"}
            />
            <Box mt={3} />
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="From"
                        inputFormat="dd/MM/yyyy"
                        value={from}
                        onChange={(value) => {
                            setFrom(value)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Box mr={2} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        value={to}
                        label="To"
                        inputFormat="dd/MM/yyyy"
                        onChange={(value) => {
                            setTo(value)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <Box mt={4} />
            <Button
                onClick={addEducationData}
                variant={"contained"}
                fullWidth
                sx={{
                    backgroundColor: "#268AFF",
                    color: "#FFF",
                    borderRadius: "10px",
                    py: 1.5,
                    "&:hover": {
                        fontWeight: "600",
                        backgroundColor: "#006ff8",
                    },
                }}
            >
                Save details
            </Button>
        </>
    )
}
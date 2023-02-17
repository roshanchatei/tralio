import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../../store/PortfolioContext";
import {portfolioService} from "../../../apis/rest.app";

export default function AddExperience({handleClose, selectedButton}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [desc, setDesc] = useState('')

    const change = () => {
        const temp = remotePortfolio.Experiences;
        temp.unshift({
            position,
            company,
            desc
        })
        return temp
    }

    const addExperiencesData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Experiences: change()
        })
            .then((res) => {
                enqueueSnackbar('Experience Card added successfully', { variant: 'success' });
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
                    setPosition(event.target.value);
                }}
                value={position}
                fullWidth
                label={"Position"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setCompany(event.target.value);
                }}
                value={company}
                fullWidth
                label={"Company"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setDesc(event.target.value);
                }}
                value={desc}
                fullWidth
                multiline
                rows={4}
                label={"Description"}
                type={"text"}
            />
            <Box mt={4} />
            <Button
                onClick={addExperiencesData}
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
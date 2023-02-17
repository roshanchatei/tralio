import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {portfolioService} from "../../apis/rest.app";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../store/PortfolioContext";

export default function UpdateExperience({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [position, setPosition] = useState(remotePortfolio?.Experiences[index]?.position)
    const [company, setCompany] = useState(remotePortfolio?.Experiences[index]?.company)
    const [desc, setDesc] = useState(remotePortfolio?.Experiences[index]?.desc)

    const change = () => {
        return remotePortfolio?.Experiences.map(function (obj, i) {
            if (i === index) {
                return {
                   position,
                    company,
                    desc
                };
            } else {
                return {...obj};
            }
        });
    }

    const updateExperiencesData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Experiences: change()
        })
            .then((res) => {
                enqueueSnackbar('Experiences updated successfully', { variant: 'success' });
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
                onClick={updateExperiencesData}
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
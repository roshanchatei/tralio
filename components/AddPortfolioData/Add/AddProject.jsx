import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../../store/PortfolioContext";
import {portfolioService} from "../../../apis/rest.app";

export default function AddProject({handleClose, selectedButton}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const change = () => {
        const temp = remotePortfolio.Projects;
        temp.unshift({
            title,
            desc
        })
        return temp
    }

    const addProjectsData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Projects: change()
        })
            .then((res) => {
                enqueueSnackbar('Project Card added successfully', { variant: 'success' });
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
                    setTitle(event.target.value);
                }}
                value={title}
                fullWidth
                label={"Name"}
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
                onClick={addProjectsData}
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
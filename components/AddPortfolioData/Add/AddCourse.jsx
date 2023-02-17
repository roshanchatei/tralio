import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../../store/PortfolioContext";
import {portfolioService} from "../../../apis/rest.app";

export default function AddCourse({handleClose, selectedButton}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [name, setName] = useState('')
    const [institute, setInstitute] = useState('')

    const change = () => {
        const temp = remotePortfolio.Courses;
        temp.unshift({
            title: name,
            institution: institute
        })
        return temp
    }

    const addCoursesData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Courses: change()
        })
            .then((res) => {
                enqueueSnackbar('Courses Card added successfully', { variant: 'success' });
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
                    setName(event.target.value);
                }}
                value={name}
                fullWidth
                label={"Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setInstitute(event.target.value);
                }}
                value={institute}
                fullWidth
                label={"Institute"}
                type={"text"}
            />
            <Box mt={4} />
            <Button
                onClick={addCoursesData}
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
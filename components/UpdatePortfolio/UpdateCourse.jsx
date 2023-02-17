import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../store/PortfolioContext";
import {portfolioService} from "../../apis/rest.app";

export default function UpdateCourse({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [name, setName] = useState(remotePortfolio?.Courses[index]?.title)
    const [institute, setInstitute] = useState(remotePortfolio?.Courses[index]?.institution)

    const change = () => {
        return remotePortfolio?.Courses.map(function (obj, i) {
            if (i === index) {
                return {
                   title: name,
                    institution: institute
                };
            } else {
                return {...obj};
            }
        });
    }

    const updateCoursesData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Courses: change()
        })
            .then((res) => {
                enqueueSnackbar('Courses updated successfully', { variant: 'success' });
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
                onClick={updateCoursesData}
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
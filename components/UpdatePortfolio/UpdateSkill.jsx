import Box from "@mui/material/Box";
import {Button, MenuItem, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../store/PortfolioContext";
import {portfolioService} from "../../apis/rest.app";

export default function UpdateSkill({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [skill, setSkill] = useState(remotePortfolio?.Skills[index]?.name)
    const [desc, setDesc] = useState(remotePortfolio?.Skills[index]?.desc)
    const [level, setLevel] = useState(remotePortfolio?.Skills[index]?.level)

    const change = () => {
        return remotePortfolio?.Skills.map(function (obj, i) {
            if (i === index) {
                return {
                    name: skill,
                    desc,
                    level
                };
            } else {
                return {...obj};
            }
        });
    }

    const updateSkillsData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Skills: change()
        })
            .then((res) => {
                enqueueSnackbar('Skills updated successfully', { variant: 'success' });
                setRemotePortfolio(res);
                handleClose();
                // console.log(isDelete)
                // setIsDelete(false)
            })
            .catch((err) => {
                enqueueSnackbar(err.message, { variant: 'error' });
            });
    }

    return (
        <>
            <TextField
                onChange={(event) => {
                    setSkill(event.target.value);
                }}
                value={skill}
                fullWidth
                label={"Skill"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setDesc(event.target.value);
                }}
                value={desc}
                fullWidth
                label={"Description"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                label={"Level"}
                select
                fullWidth
                value={level}
                onChange={(event) => {
                    setLevel(event.target.value);
                }}
            >
                <MenuItem key={"married"} value={"Beginner"}>
                    Beginner
                </MenuItem>
                <MenuItem key={"single"} value={"Intermediate"}>
                    Intermediate
                </MenuItem>
                <MenuItem key={"single"} value={"Expert"}>
                    Expert
                </MenuItem>
            </TextField>
            <Box mt={4} />
            <Button
                onClick={updateSkillsData}
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
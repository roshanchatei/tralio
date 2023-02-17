import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {portfolioService} from "../../apis/rest.app";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../store/PortfolioContext";

export default function UpdateInterest({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [name, setName] = useState(remotePortfolio?.Interests[index]?.name)
    const [desc, setDesc] = useState(remotePortfolio?.Interests[index]?.desc)

    const change = () => {
        return remotePortfolio?.Interests.map(function (obj, i) {
            if (i === index) {
                return {
                   name,
                    desc
                };
            } else {
                return {...obj};
            }
        });
    }

    const updateInterestsData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Interests: change()
        })
            .then((res) => {
                enqueueSnackbar('Interests updated successfully', { variant: 'success' });
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
                    setDesc(event.target.value);
                }}
                value={desc}
                fullWidth
                label={"Additional Information"}
                type={"text"}
            />
            <Box mt={4} />
            <Button
                onClick={updateInterestsData}
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
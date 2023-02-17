import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../store/PortfolioContext";
import {portfolioService} from "../../apis/rest.app";

export default function UpdateAward({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [title, setTitle] = useState(remotePortfolio?.Awards[index]?.title)
    const [issuer, setIssuer] = useState(remotePortfolio?.Awards[index]?.issuer)

    const change = () => {
        return remotePortfolio?.Awards.map(function (obj, i) {
            if (i === index) {
                return {
                    title,
                    issuer
                };
            } else {
                return {...obj};
            }
        });
    }

    const updateAwardsData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Awards: change()
        })
            .then((res) => {
                enqueueSnackbar('Awards updated successfully', { variant: 'success' });
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
                    setIssuer(event.target.value);
                }}
                value={issuer}
                fullWidth
                label={"Issuer"}
                type={"text"}
            />
            <Box mt={4} />
            <Button
                onClick={updateAwardsData}
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
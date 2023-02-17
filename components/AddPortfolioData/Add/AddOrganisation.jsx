import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useSnackbar} from "notistack";
import {useRemotePortfolio} from "../../../store/PortfolioContext";
import {portfolioService} from "../../../apis/rest.app";

export default function AddOrganisation({handleClose, selectedButton}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const change = () => {
        const temp = remotePortfolio.Organisations;
        temp.unshift({
            name,
            city,
            country,
            position
        })
        return temp
    }

    const addOrganisationsData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Organisations: change()
        })
            .then((res) => {
                enqueueSnackbar('Organisation Card added successfully', { variant: 'success' });
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
            <Box mt={4} />
            <Button
                onClick={addOrganisationsData}
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
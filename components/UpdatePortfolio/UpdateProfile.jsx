import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {portfolioService} from "../../apis/rest.app";
import {useSnackbar} from "notistack";
import {useRemoteUser} from "../../store/UserContext";
import {useRemotePortfolio} from "../../store/PortfolioContext";

export default function UpdateProfile({index, selectedButton, handleClose}) {

    const { enqueueSnackbar } = useSnackbar();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();
    const [first, setFirst] = useState(remotePortfolio?.Profile?.firstName)
    const [last, setLast] = useState(remotePortfolio?.Profile?.lastName)
    const [bio, setBio] = useState(remotePortfolio?.Profile?.bio)
    const [email, setEmail] = useState(remotePortfolio?.Profile?.email)

    // console.log(remotePortfolio)

    const updateProfileData = () => {
        portfolioService.patch(remotePortfolio._id,{
            Profile: {
                firstName: first,
                lastName: last,
                bio,
                email,
            }
        })
            .then((res) => {
                enqueueSnackbar('Profile updated successfully', { variant: 'success' });
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
                    setFirst(event.target.value);
                }}
                value={first}
                fullWidth
                label={"First Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setLast(event.target.value);
                }}
                value={last}
                fullWidth
                label={"Last Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                value={email}
                fullWidth
                label={"Email"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                onChange={(event) => {
                    setBio(event.target.value);
                }}
                value={bio}
                fullWidth
                multiline
                rows={4}
                label={"Bio"}
                type={"text"}
            />
            <Box mt={4} />
            <Button
                onClick={updateProfileData}
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
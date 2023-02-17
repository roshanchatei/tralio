import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Dialog, IconButton } from "@mui/material";
import AddEducation from "./Add/AddEducation";
import AddSkill from "./Add/AddSkill";
import AddProject from "./Add/AddProject";
import AddExperience from "./Add/AddExperience";
import AddCourse from "./Add/AddCourse";
import AddOrganisation from "./Add/AddOrganisation";
import AddInterest from "./Add/AddInterest";
import AddAward from "./Add/AddAward";



const useStyles = makeStyles(() =>
    createStyles({
        backDrop: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.81)",
        },
    })
);

const Index = ({selectedButton }) => {
    const classes = useStyles();

    const [pop, setPop] = useState(false);
    const handleClick = (event) => {
        setPop(true);
    };
    const handleClose = () => {
        setPop(false);
    };


    const renderAddPopper = () => {
        if(selectedButton === "Educations")
            return <AddEducation handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Skills")
            return <AddSkill handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Projects")
            return <AddProject handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Experiences")
            return <AddExperience handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Courses")
            return <AddCourse handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Organisations")
            return <AddOrganisation handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Interests")
            return <AddInterest handleClose={handleClose} selectedButton={selectedButton} />
        if(selectedButton === "Awards")
            return <AddAward handleClose={handleClose} selectedButton={selectedButton} />
    }

    return (
        <>
           <IconButton onClick={handleClick} disabled={selectedButton === "Profile"}>
               <AddIcon sx={{ color: "#319EFF" }} />
           </IconButton>
            <Dialog
                open={pop}
                onClose={handleClose}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                    },
                }}
            >
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        py={3}
                        px={3}
                        zIndex={1}
                        width={"500px"}
                        bgcolor={"#FFF"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            mb={4}
                            width={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Box fontSize={"22px"} fontWeight={600}>
                                Add {selectedButton.toLowerCase()}
                            </Box>
                            <IconButton onClick={handleClose}>
                                <CloseIcon sx={{ color: "#000" }} />
                            </IconButton>
                        </Box>
                        {
                            renderAddPopper()
                        }
                        {/*<Box />*/}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};
export default Index;

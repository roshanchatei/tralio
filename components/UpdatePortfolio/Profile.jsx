import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";
import {useRemotePortfolio} from "../../store/PortfolioContext";


export default function Profile({selectedButton}) {

    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    return (
        <>
            <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={0}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"83px"} mr={4}>
                                    First Name:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {remotePortfolio?.Profile?.firstName}
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"83px"} mr={4}>
                                    Last Name
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {remotePortfolio?.Profile?.lastName}
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"83px"} mr={4}>
                                    Bio:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                    {remotePortfolio?.Profile?.bio}
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"83px"} mr={4}>
                                    Email:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {remotePortfolio?.Profile?.email}
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
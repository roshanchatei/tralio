import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";
import {useRemotePortfolio} from "../../store/PortfolioContext";


export default function Skill({selectedButton}) {

    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    return (
        <>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-between"}>
                {
                    remotePortfolio?.Skills.map((each, index) => (
                        <Grid key={'Skills.map' + index} item xs={12} sm={12} md={6}>
                            <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={index}>
                                <Box width={"100%"}>
                                    <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            Skill:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.name}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            Description:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.desc}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            Level:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                            {each?.level}
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </>
    )
}
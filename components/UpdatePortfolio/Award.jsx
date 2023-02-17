import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";
import {useRemotePortfolio} from "../../store/PortfolioContext";


export default function Award({selectedButton}) {

    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    return (
        <>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-between"}>
                {
                    remotePortfolio?.Awards.map((each, index) => (
                        <Grid key={'Awards.map' + index} item xs={12} sm={12} md={6}>
                            <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={index}>
                                <Box width={"100%"}>
                                    <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                        <Box color={"#545454"} minWidth={"49px"} mr={4}>
                                            Name:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.title}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"49px"} mr={4}>
                                            Issuer:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.issuer}
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
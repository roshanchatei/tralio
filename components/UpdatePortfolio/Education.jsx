import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";
import {useRemotePortfolio} from "../../store/PortfolioContext";


export default function Education({selectedButton}) {

    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const dateParse = (date) => {
        const d = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const newDate = '';
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return month + " " + year
    }

    return (
        <>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-between"}>
                {
                    remotePortfolio?.Educations.map((each, index) => (
                        <Grid key={'Educations.map' + index} item xs={12} sm={12} md={6}>
                            <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={index}>
                                <Box width={"100%"}>
                                    <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            Degree:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.degree}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            School/University:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.school}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            City:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                            {each?.city}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            Country:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {each?.country}
                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            From:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {dateParse(each?.startDate)}

                                        </Box>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"flex-start"}
                                        fontSize={"16px"}
                                        mt={2}
                                    >
                                        <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                            To:
                                        </Box>
                                        <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                            {dateParse(each?.endDate)}
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
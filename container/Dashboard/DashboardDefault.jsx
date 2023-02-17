import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TimelineIcon from '@mui/icons-material/Timeline';
import {useState} from "react";
import CustomButton from "../../components/Dashboard/CustomButton";
import Hidden from "@mui/material/Hidden";
import DashboardMenu from "../../components/Dashboard/DashboardMenu";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Bg from '../../public/backgrounds/portfolio1.jpg'
import Image from "next/image";
import {useRouter} from "next/router";
import {useRemoteUser} from "../../store/UserContext";

export default function DashboardDefault({setDashboardPage}) {

    const Router = useRouter()
    const [currentStage , setCurrentStage] = useState(0);

    const [user] = useRemoteUser()

    return (
        <>
            <BackgroundSearch color={'#fff'} head={'The best way to foresee the future is to make it happen.'} src={'/backgrounds/dashboardBg3.jpg'} />
            <Container maxWidth={'lg'}>
                {/*flexDirection={{lg: 'row', md: 'row', sm: 'row', xs: 'column'}}*/}
                <Box mt={7} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <CustomButton id={'Update Data'} image={<EditIcon />} onClick={async () => {
                        await Router.push('/portfolio')
                    }} />
                    <CustomButton id={'Generate Portfolio'} image={<TimelineIcon />} onClick={ () => {
                        window.open(`/u/${user.username}`, 'blank')
                    }} />
                    <CustomButton id={'Add Post'} image={<AddIcon />} onClick={() => {window.location.href = '/add-post'}} />
                    {/*<CustomButton id={'Check Task'} image={<TimelineIcon />} />*/}
                </Box>
                <Box p={1}>
                    <DashboardMenu setCurrentStage={setCurrentStage} />
                </Box>
                <Box p={2} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'} width={'100%'} mb={4} borderRadius={'10px'}>
                    {
                        currentStage === 1 &&
                        <>
                            <Box width={'100%'}>
                                <Box fontWeight={700} fontSize={'30px'} textAlign={'center'} p={5}>
                                    Posts
                                </Box>
                                <Grid container spacing={4}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box bgcolor={'#F2F7FF'} p={4} display={'flex'} width={'100%'} alignItems={'flex-start'} borderRadius={'20px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'}>
                                            <Avatar />
                                            <Box mr={2} />
                                            <Box fontSize={'16px'}>
                                                <Box display={'flex'} alignItems={'center'} mb={1}>
                                                    <Box fontWeight={'700'}>Priyanka Pandit</Box>
                                                    <Hidden smDown>
                                                        <Box mr={2} />
                                                        <Box color={'#A6A6A6'}>12 Days ago</Box>
                                                    </Hidden>
                                                </Box>
                                                <Box>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui sapien sollicitudin leo faucibus sed viverra faucibus. Ut cum lacinia velit cursus curabitur enim libero, nec. Imperdiet augue tellus orci praesent. Nec nisl mattis sed placerat. Facilisis non nunc purus convallis elementum, ut in. Sagittis morbi nulla consequat,
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box bgcolor={'#F2F7FF'} p={4} display={'flex'} width={'100%'} alignItems={'flex-start'} borderRadius={'20px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'}>
                                            <Avatar />
                                            <Box mr={2} />
                                            <Box fontSize={'16px'}>
                                                <Box display={'flex'} alignItems={'center'} mb={1}>
                                                    <Box fontWeight={'700'}>Priyanka Pandit</Box>
                                                    <Hidden smDown>
                                                        <Box mr={2} />
                                                        <Box color={'#A6A6A6'}>12 Days ago</Box>
                                                    </Hidden>
                                                </Box>
                                                <Box>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui sapien sollicitudin leo faucibus sed viverra faucibus. Ut cum lacinia velit cursus curabitur enim libero, nec. Imperdiet augue tellus orci praesent. Nec nisl mattis sed placerat. Facilisis non nunc purus convallis elementum, ut in. Sagittis morbi nulla consequat,
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box bgcolor={'#F2F7FF'} p={4} display={'flex'} width={'100%'} alignItems={'flex-start'} borderRadius={'20px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'}>
                                            <Avatar />
                                            <Box mr={2} />
                                            <Box fontSize={'16px'}>
                                                <Box display={'flex'} alignItems={'center'} mb={1}>
                                                    <Box fontWeight={'700'}>Priyanka Pandit</Box>
                                                    <Hidden smDown>
                                                        <Box mr={2} />
                                                        <Box color={'#A6A6A6'}>12 Days ago</Box>
                                                    </Hidden>
                                                </Box>
                                                <Box>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui sapien sollicitudin leo faucibus sed viverra faucibus. Ut cum lacinia velit cursus curabitur enim libero, nec. Imperdiet augue tellus orci praesent. Nec nisl mattis sed placerat. Facilisis non nunc purus convallis elementum, ut in. Sagittis morbi nulla consequat,
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box bgcolor={'#F2F7FF'} p={4} display={'flex'} width={'100%'} alignItems={'flex-start'} borderRadius={'20px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'}>
                                            <Avatar />
                                            <Box mr={2} />
                                            <Box fontSize={'16px'}>
                                                <Box display={'flex'} alignItems={'center'} mb={1}>
                                                    <Box fontWeight={'700'}>Priyanka Pandit</Box>
                                                    <Hidden smDown>
                                                        <Box mr={2} />
                                                        <Box color={'#A6A6A6'}>12 Days ago</Box>
                                                    </Hidden>
                                                </Box>
                                                <Box>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui sapien sollicitudin leo faucibus sed viverra faucibus. Ut cum lacinia velit cursus curabitur enim libero, nec. Imperdiet augue tellus orci praesent. Nec nisl mattis sed placerat. Facilisis non nunc purus convallis elementum, ut in. Sagittis morbi nulla consequat,
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    }
                    {
                        currentStage === 2 &&
                        <>
                            <Box width={'100%'}>
                                <Box fontWeight={700} fontSize={'30px'} textAlign={'center'} p={5}>
                                    Portfolios
                                </Box>
                                <Grid container spacing={4}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box width={'100%'} display={'flex'} borderRadius={'15px'} boxShadow={'0px 12px 34px -9px rgba(0, 0, 0, 0.12)'} overflow={'hidden'}>
                                           <Box width={'50%'}>
                                               <Image src={Bg} alt={'Bg'} />
                                           </Box>
                                            <Box width={'50%'} display={'flex'} alignItems={'flex-start'} justifyContent={'center'} flexDirection={'column'} pl={10} position={'relative'}>
                                                <Box position={'absolute'} px={2} py={0.1} bgcolor={'#3086FD'} borderRadius={'10px'} bottom={15} right={15} color={'white'}>
                                                    Default
                                                </Box>
                                                <Box display={'flex'} alignItems={'center'}>
                                                    <Box bgcolor={'#fdb506'} height={'15px'} width={'15px'} />
                                                    <Box mr={1} />
                                                    <Box color={'#fdb506'} fontWeight={600}>
                                                        Yellow
                                                    </Box>
                                                </Box>
                                                <Box mb={1} />
                                                <Box display={'flex'} alignItems={'center'}>
                                                    <Box bgcolor={'#000'} height={'15px'} width={'15px'} />
                                                    <Box mr={1} />
                                                    <Box color={'#000'} fontWeight={600}>
                                                        Black
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </>
                    }
                    {
                        currentStage === 3 &&
                        <>
                            <Box width={'100%'}>
                                <Box fontWeight={700} fontSize={'30px'} textAlign={'center'} p={5}>
                                    Activity
                                </Box>
                            </Box>
                        </>
                    }
                    <Box mt={100} />
                </Box>
            </Container>
        </>
    )
}
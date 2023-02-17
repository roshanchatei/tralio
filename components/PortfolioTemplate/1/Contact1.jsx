
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import Title from "../Title";
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact1() {
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={10}  sx={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Title value={'Contact'} text={1} />
                    <Box mt={10} />
                    <Grid container spacing={4}>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                    color: '#ffb44b',
                                    '&:hover': {
                                        backgroundColor: '#1f1f1f',
                                        color: '#fff'
                                    },
                                }}>
                                    <EmailIcon sx={{ fontSize: 50 }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                    color: '#ffb44b',
                                    '&:hover': {
                                        backgroundColor: '#1f1f1f',
                                        color: '#fff'
                                    },
                                }}>
                                    <TwitterIcon sx={{ fontSize: 50 }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box width={'100%'} p={2} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                <Box p={4} bgcolor={'rgba(255, 255, 255, 0.1)'} borderRadius={25} sx={{
                                    color: '#ffb44b',
                                    '&:hover': {
                                        backgroundColor: '#1f1f1f',
                                        color: '#fff'
                                    },
                                }}>
                                    <LinkedInIcon sx={{ fontSize: 50 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

import Box from "@mui/material/Box";
import {Avatar, Button, Container, Grid} from "@mui/material";

export default function Header1(props) {
    const profile = props.profile;
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={6} sx={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Grid container spacing={0}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} p={4} color={'#fff'} display={'flex'} justifyContent={'center'}>
                                <Box>
                                    <Box color={'#ffb44b'} fontWeight={700} fontSize={'20px'}>
                                        HELLO!
                                    </Box>
                                    <Box mt={3} lineHeight={1.1} fontWeight={900} fontSize={'50px'}>
                                        <Box>
                                            {"I'm"} <span style={{color: '#ffb44b'}}>{profile?.firstName}</span>
                                        </Box>
                                        <Box color={'#ffb44b'}>
                                            {profile?.lastName}
                                        </Box>
                                    </Box>
                                    <Box mt={4} fontSize={'20px'} fontWeight={700}>
                                        A {'Freelance Web Designer'}
                                    </Box>
                                    <Button
                                        onClick={() => {
                                            window.open(`mailto:${profile?.email}`)
                                        }}
                                        variant={'contained'} sx={{
                                        background: '#ffb44b',
                                        color: '#000',
                                        borderRadius: '20px',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                        },
                                        fontWeight: 700,
                                        mt: 3,
                                    }}>
                                        Hire Me
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} p={4} my={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Avatar src={'https://source.unsplash.com/random'} sx={{ width: 250, height: 250 }}>
                                K
                            </Avatar>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box mb={10} />
        </>
    );
}

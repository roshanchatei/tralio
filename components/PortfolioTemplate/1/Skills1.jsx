import Box from "@mui/material/Box";
import {Container, createTheme, Grid, LinearProgress} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types';
import Title from "../Title";

const LinearProgressWithLabel = ({value}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%' }}>
                <ThemeProvider theme={createTheme({
                    palette: {
                        primary: {
                            main: '#ffb44b',
                        },
                    },
                })}>
                    <LinearProgress sx={{height: '15px', borderRadius: '10px', background: '#000',}} variant="determinate" value={value} />

                </ThemeProvider>
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function Skills1(props) {
    const skill = props.skill;
    const result = (value) => {
        if(value === "Beginner")
            return 35;
        if(value === "Intermediate")
            return 70;
        if(value === "Expert")
            return 95;
        return 0;
    }
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box textAlign={'center'} width={'100%'}>
                    <Title value={'Skills'} text={0} />
                    <Box mt={10} />
                </Box>
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                    {
                        skill.map((each) => (
                            <Grid item lg={6} md={6} sm={12} xs={12} key={each._id}>
                                <Box py={3} px={6}>
                                    <Box mb={2} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Box fontWeight={700} fontSize={'25px'}>
                                            {each?.name}
                                        </Box>
                                        <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                            {each?.level === "Beginner" ? "35%" : each?.level === "Intermediate" ? "70%" : each?.level === "Expert" ? "95%" : "0%"}
                                        </Box>
                                    </Box>
                                    <LinearProgressWithLabel value={result(each?.level)} />
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
            <Box mb={10} />
        </>
    );
}

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import LoginIcons from '../../components/LoginIcons/LoginIcons';
import registerForm from '../../TralioAPI/registerForm';
import { emailService } from '../../apis/rest.app';

import { useSnackbar } from 'notistack';
import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useRouter } from 'next/router';
import { sendOtp } from '../../TralioAPI/tralio';
import { useRemoteUser } from '../../store/UserContext';

export default function SignUp({ setCurrentStage }) {

    const [remoteUser, setRemoteUser] = useRemoteUser();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        gender: '',
    });
    const Router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const handleUserInfo = (e) => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value,
        });
    };

    const handleGenderChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleDate = (newDate) => {
        setUser({
            ...user,
            userDOB: newDate,
        });
    };

    const handleSendOtp = async () => {
        await emailService
            .create({
                id: 1,
                project: 'Tralio',
                subject: 'Tralio Email Verification OTP',
                email: user.email,
            })
            .then(async (res) => {
                if (user.gender === 'Male') user.gender = 1;
                else if (user.gender === 'Female') user.gender = 2;
                else user.gender = 3;
                setRemoteUser(user);
                // console.log('Signup remote user',remoteUser);
                enqueueSnackbar('OTP Sent', {
                    variant: 'success',
                });
                setCurrentStage(2);
                localStorage.setItem('transid', res.transid);
            })
            .catch((e) => {
                enqueueSnackbar(e ? e.message : 'Something went wrong', {
                    variant: 'error',
                });
            })
            .finally(() => setLoading(false));
    };

    const generateSignUpForm = (input) => {
        return (
            <Box key={'Signup ' + input.name} width={'100%'}>
                <TextField
                    fullWidth
                    id={input.name}
                    label={input.placeholder}
                    variant='outlined'
                    type={input.type}
                    onChange={handleUserInfo}
                />
                <Box mt={2} />
            </Box>
        );
    };

    return (
        <>
            <Box fontSize={'15px'} fontWeight={300}>
                Yay ! Happy to have you onboard
            </Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Sign Up with Us
            </Box>
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                pl={{ lg: 10, md: 8, sm: 6, xs: 2 }}
                pr={{ lg: 10, md: 8, sm: 6, xs: 2 }}
            >
                {registerForm.map(generateSignUpForm)}
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    width={'100%'}
                >
                    <FormControl
                        sx={{
                            width: {
                                lg: '200px',
                                md: '200px',
                                sm: '190px',
                                xs: '180px',
                            },
                        }}
                    >
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name='gender'
                            input={<OutlinedInput label='Gender' />}
                            value={user.gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem key='male' value='Male'>
                                Male
                            </MenuItem>
                            <MenuItem key='female' value='Female'>
                                Female
                            </MenuItem>
                            <MenuItem key='other' value='Other'>
                                Other
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Box mr={2} />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label='Date of Birth'
                            inputFormat='dd/MM/yyyy'
                            onChange={handleDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box mt={3} />
                <Button
                    onClick={handleSendOtp}
                    variant={'contained'}
                    sx={{ width: '100%' }}
                >
                    Get OTP
                </Button>
                <Box mt={2} />
                <Divider orientation='horizontal' flexItem>
                    OR
                </Divider>
                <LoginIcons />
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={2}
            >
                <Box>{'Have an account?'}</Box>
                <Box mr={1} />
                <Box
                    color='#458FF6'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        setCurrentStage(0);
                    }}
                >
                    {'Login'}
                </Box>
            </Box>
        </>
    );
}

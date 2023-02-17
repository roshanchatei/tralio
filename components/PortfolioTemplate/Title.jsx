
import Box from "@mui/material/Box";

export default function Title({value, text}) {
    return (
        <>
            <Box textAlign={'center'} width={'100%'}>
                <Box lineHeight={0.6} color={text === 0 ? '#000' : '#fff'} position={'relative'}>
                    <Box fontWeight={800} fontSize={'35px'} >
                        {value}
                    </Box>
                    <Box position={'absolute'} top={10} width={'100%'} textAlign={'center'} letterSpacing={'2.5px'} color={text === 0 ? '#ececec' : '#1f1f1f'} fontWeight={900} fontSize={'50px'} zIndex={-1}>
                        {value}
                    </Box>
                </Box>
            </Box>

        </>
    );
}

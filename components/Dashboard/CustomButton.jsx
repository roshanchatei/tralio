
import Box from "@mui/material/Box";

export default function CustomButton({id, image, onClick }) {
    return (
        <>
            <Box mb={3} p={{lg: 2, md: 2, sm: 2,xs: 1}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={{lg: '15px', md: '15px', sm: '15px',xs: '10px'}} bgcolor={'#e2e2e2'} sx={{
                '&:hover': {
                    background: 'black',
                    color: '#fff',
                    cursor: 'pointer',
                },
            }}
                 width={{lg: '225px', md: '235px', sm: '235px',xs: '150px'}}
                 onClick={onClick}
            >
                <Box fontWeight={500} fontSize={{lg: '18px', md: '18px', sm: '18px',xs: '12px'}}>
                    {id}
                </Box>
                {image}
            </Box>
        </>
    );
}

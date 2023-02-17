
import Box from '@mui/material/Box';
import Link from "../../components/Layouts/Link";
import Image from "next/image";
import Google from "../../public/images/Logos/googleLogol.svg";
import Apple from "../../public/images/Logos/appleLogo.svg";
import Linkedin from "../../public/images/Logos/linkedInLogo.svg";
import Github from "../../public/images/Logos/githubLogo.svg";

export default function LoginIcons () {

    const icons = [
        {
            src: Google,
            alt: 'Google logo',
            href: '/'
        },
        {
            src: Apple,
            alt: 'Apple logo',
            href: '/'
        },
        {
            src: Linkedin,
            alt: 'Linkedin logo',
            href: '/'
        },
        {
            src: Github,
            alt: 'Github logo',
            href: '/'
        },
    ]

    return (
        <>
            <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} width={'100%'} mt={2} pl={4} pr={4}>
                {
                    icons.map(e => (
                        <Box key={e.alt} component={Link} noLinkStyle href={e.href} width={'25px'} height={'25px'}>
                            <Image src={e.src} alt={e.alt} />
                        </Box>
                    ))
                }
            </Box>
        </>
    );
};

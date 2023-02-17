import Header1 from "../../components/PortfolioTemplate/1/Header1";
import AboutMe1 from "../../components/PortfolioTemplate/1/AboutMe1";
import Education1 from "../../components/PortfolioTemplate/1/Education1";
import Skills1 from "../../components/PortfolioTemplate/1/Skills1";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Work1 from "../../components/PortfolioTemplate/1/Work1";
import Project1 from "../../components/PortfolioTemplate/1/Project1";
import {useRouter} from "next/router";
import Courses1 from "../../components/PortfolioTemplate/1/Courses1";
import Hidden from "@mui/material/Hidden";
import Awards1 from "../../components/PortfolioTemplate/1/Awards1";
import Contact1 from "../../components/PortfolioTemplate/1/Contact1";

export default function PortfolioTemplate1(props) {
    const portfolio = props.portfolio;
    const Router = useRouter();

    return (
        <>
            <Header1 profile={portfolio?.Profile} />
            <AboutMe1 profile={portfolio?.Profile} />
            {
                portfolio?.Educations &&  <Education1 education={portfolio?.Educations} />
            }
            {
                portfolio?.Skills &&  <Skills1 skill={portfolio?.Skills} />
            }
            <Box width={'100%'} bgcolor={'#000'}>
                {
                    portfolio?.Experiences &&  <Work1 experience={portfolio?.Experiences} />
                }
                {
                    portfolio?.Projects &&  <Project1 project={portfolio?.Projects} />
                }
                {
                    portfolio?.Courses &&   <Courses1 course={portfolio?.Courses} />
                }
                {
                    portfolio?.Awards &&  <Awards1 award={portfolio?.Awards} />
                }
                <Contact1 />
                <Hidden smDown>
                    <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'center'} color={'#909090'} fontSize={'18px'} fontWeight={500} pb={8}>
                        <Box mr={0.5}>
                            Copyright ©2022 All rights reserved | This portfolio is made with
                        </Box>
                        <FavoriteIcon />
                        <Box ml={0.5}>by</Box>
                        <Box ml={0.5}
                             onClick={() => {
                                 Router.push("/");
                             }}
                             sx={{
                                 cursor: 'pointer',
                                 textDecoration: 'underline',
                                 '&:hover': {
                                     color: '#fff',
                                 },
                             }}>
                            Tralio
                        </Box>
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Box color={'#909090'} fontSize={'18px'} fontWeight={500} textAlign={'center'} mb={1}>
                        Copyright ©2022 All rights reserved
                    </Box>
                    <Box display={'flex'} alignItems={'center'} width={'100%'} justifyContent={'center'} color={'#909090'} fontSize={'18px'} fontWeight={500} pb={8}>
                        <Box mr={0.5}>
                           This portfolio is made with
                        </Box>
                        <FavoriteIcon />
                        <Box ml={0.5}>by</Box>
                        <Box ml={0.5}
                             onClick={async () => {
                                 await Router.push("/");
                             }}
                             sx={{
                                 textDecoration: 'underline',
                                 cursor: 'pointer',
                                 '&:hover': {
                                     color: '#fff',
                                 },
                             }}>
                            Trailo
                        </Box>
                    </Box>
                </Hidden>
            </Box>
        </>
    );
}

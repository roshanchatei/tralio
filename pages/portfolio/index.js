
import UpdatePortfolioDataNew from "../../container/Dashboard/UpdatePortfolioDataNew";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import Navbar from "../../components/Navbar/Navbar";
import {useRouter} from "next/router";
import {portfolioService} from "../../apis/rest.app";
import {useEffect} from "react";
import {useRemotePortfolio} from "../../store/PortfolioContext";

const Portfolio = () => {

    const Router = useRouter();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const createPortfolio = async () => {
        await portfolioService.create({})
            .then((res) => {
                setRemotePortfolio(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const portfolioExists = async () => {
        await portfolioService.find()
            .then((res) => {
                if(res){
                    // console.log("res", res)
                    setRemotePortfolio(res)
                }
                else createPortfolio()
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        if(!remotePortfolio)
            portfolioService.find()
                .then((res) => {
                    if(res){
                        // console.log("res", res)
                        setRemotePortfolio(res)
                    }
                    else createPortfolio()
                })
                .catch((err) => {
                    console.log(err)
                });
    }, [remotePortfolio])


    return (
        <>
            {/*<PortfolioTemplate1 />*/}
            <Navbar />
            <UpdatePortfolioDataNew />
        </>
    );
}

export default Portfolio;
Portfolio.layout = null;

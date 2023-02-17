

import getConfig from "next/config";
import PortfolioTemplate1 from "../../container/PortfolioTemplate/PortfolioTemplate1";
const { publicRuntimeConfig } = getConfig();
import {portfolioService} from "../../apis/rest.app";
import {useState} from "react";
const { API_URL, apiVersion } = publicRuntimeConfig;

export default function Portfolio(props) {
    const [portfolio, setPortfolio] = useState(props.portfolio)
    return (
        <>
            <PortfolioTemplate1
                portfolio={portfolio}
            />
        </>
    );
}

export async function getServerSideProps(context) {
    const {username} = context.query;
    const query = `username=${username}`;
    const url = `${API_URL}/${apiVersion}/portfolio?${query}`;
    const data = await fetch(url).then((res) => res.json());

    return {
        props: {
            portfolio: data,
        },
    };
}

Portfolio.layout = null;
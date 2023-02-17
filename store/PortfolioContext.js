import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PortfolioContext = createContext([null, (user) => user]);

export const PortfolioProvider = ({ value, children }) => {
    const [remotePortfolio, setRemotePortfolio] = useState(null);

    useEffect(() => {
        setRemotePortfolio(value);
    }, [value]);

    return <PortfolioContext.Provider value={[remotePortfolio, setRemotePortfolio]}>{children}</PortfolioContext.Provider>;
};

PortfolioProvider.propTypes = {
    children: PropTypes.any.isRequired,
    value: PropTypes.object,
};

export const useRemotePortfolio = () => useContext(PortfolioContext);

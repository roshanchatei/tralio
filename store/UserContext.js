import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext([null, (user) => user]);

UserContext.displayName = 'Language';

export const UserProvider = ({ value, children }) => {
    const [remoteUser, setRemoteUser] = useState(null);

    useEffect(() => {
        setRemoteUser(value);
    }, [value]);

    return <UserContext.Provider value={[remoteUser, setRemoteUser]}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.any.isRequired,
    value: PropTypes.object,
};

export const useRemoteUser = () => useContext(UserContext);

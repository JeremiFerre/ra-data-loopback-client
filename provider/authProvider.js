import {authClient} from './lb_provider/authClient';

export const authProvider = (apiURL) => {

	const effectiveAuthClient = authClient(apiURL);

	return (type, params) => {
        return effectiveAuthClient(type, params);
    };
};

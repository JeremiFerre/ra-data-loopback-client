**React-Admin data provider for Loopback 3.x**

You must add Loopback3-X-Total-Count on your Loopback application in order to make this provider work:
https://github.com/kimkha/loopback3-xTotalCount

Usage in a React-Admin application:

```
import {Admin} from 'react-admin';
import {authProvider, loopbackDataProvider} from './provider';

const API_URL = "Your API server address /api";
const LOGIN_API_URL = API_URL + "/Users/login";

class App extends React.Component {
    render() {
        return (
            <Admin
                dataProvider={loopbackDataProvider(API_URL)}
                authProvider={authProvider(LOGIN_API_URL)}
            >
                {/* Your admin resources */}
            </Admin>
        );
    }
}

export default App;
```

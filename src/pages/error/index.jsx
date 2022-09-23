import {Link, useRouteError} from "react-router-dom";

import './index.css';

function Index() {
    const error = useRouteError();

    return (
        <div className='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.&nbsp;<Link to='/'>Click here go Home.</Link></p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default Index

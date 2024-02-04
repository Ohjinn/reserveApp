import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/Login';
import Main from './component/Main';

const Router = () => {
    return <BrowserRouter>
        {/* <NavVar /> */}
        <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/main"} element={<Main />} />
        </Routes>
    </BrowserRouter>
}

export default Router;
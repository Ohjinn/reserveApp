import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/Login';
import Main from './component/Main';
import ReserveLocation from './component/ReserveLocation';

const Router = () => {
    return <BrowserRouter>
        {/* <NavVar /> */}
        <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/main"} element={<Main />} />
            <Route path={"/mypage"} element={<ReserveLocation />} />
        </Routes>
    </BrowserRouter>
}

export default Router;
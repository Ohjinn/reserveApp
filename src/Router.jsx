import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/Login';

const Router = () => {
    return <BrowserRouter>
        {/* <NavVar /> */}
        <Routes>
            <Route path={"/"} element={<Login />} />
        </Routes>
    </BrowserRouter>
}

export default Router;
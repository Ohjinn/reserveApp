import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import RoomSelect from './pages/RoomSelect';

const Router = () => {
    return <BrowserRouter>
        {/* <NavVar /> */}
        <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/main"} element={<Main />} />
            <Route path={"/mypage"} element={<MyPage />} />
            <Route path={"/roomselect"} element={<RoomSelect />}/>
            
        </Routes>
    </BrowserRouter>
}

export default Router;
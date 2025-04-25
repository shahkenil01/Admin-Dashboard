import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useState } from 'react';
import Login from './pages/login';

const MyContext = createContext();

function AppWrapper() {

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)
  const[isLogin, setIsLogin] = useState(false);

const values={
  isToggleSidebar,
  setIsToggleSidebar,
  isLogin,
  setIsLogin
}

  return (
      <MyContext.Provider value={values}>
        {
          !isLoginPage && <Header/>
        }
        <div className='main d-flex'>
          {
            !isLoginPage && 
            <div className={`sidebarWrapper ${isToggleSidebar==true ? 'toggle' : ''}`}>
              <Sidebar/>
            </div>
          }

          <div className={`content  ${isLoginPage ? 'full' : ''} ${isToggleSidebar==true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard/>}/>
              <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
              <Route path="/login" exact={true} element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
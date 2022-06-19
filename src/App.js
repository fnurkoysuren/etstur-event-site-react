import './App.css';
import SiteHeader from './layout/SiteHeader';
import SiteFooter from './layout/SiteFooter';
import { Routes, Route } from 'react-router-dom';
import Events from './pages/Events';

function App() {

  return (<>
    <SiteHeader></SiteHeader>
    <Routes>
      <Route path={"/"} element={<Events />}></Route>
    </Routes>
    <SiteFooter></SiteFooter>
  </>);
}

export default App;

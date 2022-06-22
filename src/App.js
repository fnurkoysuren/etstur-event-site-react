import { Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Header from './pages/layout/Header';
import Footer from './pages/layout/Footer';
import EventDetail from './pages/EventDetail';

function App() {

  return (<>
    <Header></Header>
    <Routes>
      <Route path={"/"} element={<Events />}></Route>
      <Route path={"/:id/:name"} element={<Events />}></Route>
      <Route path={"/:id/:name"} element={<Events />}></Route>
      <Route path={"/:id/:name"} element={<Events />}></Route>
      <Route path={"/:id/name"} element={<Events />}></Route>
      <Route path={"/:name"} element={<EventDetail />}></Route>
    </Routes>
    <Footer></Footer>
  </>);
}

export default App;

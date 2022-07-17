import FourZeroFour from './pages/404/404';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Soon from './pages/soon/Soon';
import Contact from './pages/contact/Contact';
import Dev from './pages/dev/Dev';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/soon' element={<Soon />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/dev' element={<Dev />} />
        <Route exact path='/*' element={<FourZeroFour />} />
      </Routes>
    </div>
  );
}

export default App;

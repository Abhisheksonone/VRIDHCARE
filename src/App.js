import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Home/Layout'
import Home from './Home/Home'
import HealthFeed from './Contents/HealthFeed';
import TreatAyurveda from './Contents/TreatAyurveda';

function App() {
  return (
   
    <Router> 
      <Routes>
      <Route  path="/" element={<Layout></Layout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/health" element={<HealthFeed></HealthFeed>}></Route>
      <Route path="/feed" element={<TreatAyurveda></TreatAyurveda>}></Route>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;

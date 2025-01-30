import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Use 'react-router-dom'
import Login from './components/login/Login';
import TwoStep from './components/twostep/TwoStep';
import Important from './components/important/Important';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function App() {

  const TrackPageView = () => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return null;
  };

  return (
    <Router>
      <TrackPageView />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/twostep' element={<TwoStep />} />
        <Route path='/important' element={<Important />} />
      </Routes>
    </Router>
  );
}

export default App;

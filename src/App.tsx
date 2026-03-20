import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Connect from './Connect';
import DiscordCS from './DiscordCS';
import AtherEnergyCS from './AtherEnergyCS';
import ArMarketsCS from './ArMarketsCS';
import TranquilStayCS from './TranquilStayCS';
import NavantisCS from './NavantisCS';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/work/discordcs" element={<DiscordCS />} />
        <Route path="/work/atherenergycs" element={<AtherEnergyCS />} />
        <Route path="/work/ar-markets" element={<ArMarketsCS />} />
        <Route path="/work/tranquilstay" element={<TranquilStayCS />} />
        <Route path="/work/navantis" element={<NavantisCS />} />
      </Routes>
    </>
  );
}

export default App;

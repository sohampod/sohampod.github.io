import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Connect from './Connect';
import InteractionPrototypes from './InteractionPrototypes';
import DiscordCS from './DiscordCS';
import AtherEnergyCS from './AtherEnergyCS';
import ArMarketsCS from './ArMarketsCS';
import ProjectDetail from './ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/work/interaction-prototypes" element={<InteractionPrototypes />} />
      <Route path="/work/discordcs" element={<DiscordCS />} />
      <Route path="/work/atherenergycs" element={<AtherEnergyCS />} />
      <Route path="/work/ar-markets" element={<ArMarketsCS />} />
      <Route path="/work/:id" element={<ProjectDetail />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;

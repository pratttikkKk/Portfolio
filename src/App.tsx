import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { SmartMechanicCaseStudy } from '@/pages/SmartMechanicCaseStudy';
import { SAMVEDCaseStudy } from '@/pages/SAMVEDCaseStudy';
import { MarketSphereCaseStudy } from '@/pages/MarketSphereCaseStudy';
import { ProdiCaseStudy } from '@/pages/ProdiCaseStudy';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/smart-mechanic" element={<SmartMechanicCaseStudy />} />
        <Route path="/project/samved" element={<SAMVEDCaseStudy />} />
        <Route path="/project/marketsphere" element={<MarketSphereCaseStudy />} />
        <Route path="/project/prodi-ai-manufacturing" element={<ProdiCaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

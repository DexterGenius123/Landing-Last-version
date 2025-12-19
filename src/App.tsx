import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'team'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'home' && (
        <>
          <Hero />
          <Features />
          <WhyUs />
        </>
      )}
      {activeTab === 'team' && <Team />}
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import "./output.css";
import Testimonials from "./components/Testimonials";
import CTA from './components/CTA';
import InvestmentTrends from './components/InvestmentTrends';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      
    <CTA />
    <Features />
    <Testimonials />
    <InvestmentTrends />
    </div>
  );
}

export default App;

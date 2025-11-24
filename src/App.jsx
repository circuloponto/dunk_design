import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;

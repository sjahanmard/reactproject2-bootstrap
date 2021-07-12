import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import MainHome from './components/mainhome';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <MainHome/>
          <Footer/>
    </div>
  );
}

export default App;

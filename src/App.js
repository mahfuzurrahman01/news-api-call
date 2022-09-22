import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Header></Header>
       <News></News>
       <Footer></Footer>
    </div>
  );
}

export default App;

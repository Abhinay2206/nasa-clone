import './App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import FeaturedSection from './components/FeaturedSection';

function App() {
  return (
    <div >
      <NavBar/>
      <div>
        <MainPage/>
        <div>
        <FeaturedSection/>
        </div>
      </div>
    </div>
  );
}

export default App;

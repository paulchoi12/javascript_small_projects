
import './App.css';
import AllText from './Components/ContentPage/AllText';
import DoublePicture from './Components/ContentPage/DoublePicture';
import SinglePictureText from './Components/ContentPage/SinglePictureText';
import HeroPage from './Components/HeroPage/HeroPage';


function App() {
  return (
    <div className="App">
     <HeroPage/>
     <DoublePicture/>
     <SinglePictureText/>
     <AllText/>
    </div>
  );
}

export default App;

import { Component } from 'react';
import ParticlesComponent from './Components/Particles';
import './App.css';
import FaceRecogntion from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';




class App extends Component {


  render() {
    return (
      <div className="App">
        <ParticlesComponent className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecogntion />
      </div>
    );
  }
}

export default App;

// import { Navigation } from './NavigationElements';

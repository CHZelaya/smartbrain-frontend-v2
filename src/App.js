import { Component } from 'react';
import './App.css';
import FaceRecogntion from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceRecogntion />
      </div>
    );
  }
}

export default App;

// import { Navigation } from './NavigationElements';

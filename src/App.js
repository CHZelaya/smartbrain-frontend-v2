import { Component } from 'react';
import ParticlesComponent from './Components/Particles';
import './App.css';
import FaceRecogntion from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      image: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(this.state.input)
  };

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({ image: this.state.input });
    console.log("state of image:", this.state.image)
  };

  render() {
    return (
      <div className="App">
        <ParticlesComponent className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecogntion />
      </div>
    );
  }
}

export default App;

